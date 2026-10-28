/**
 * Heuristic ETA and Route Scheduling Logic
 * Decoupled pure logic for the low-cost transit ETA calculation
 */

export interface BusRouteStop {
  id: string;
  name: string;
  sequence: number;
  scheduledOffsetMinutes: number; // offset from route origin
}

export interface BusRoute {
  id: string;
  name: string;
  source: string;
  destination: string;
  via?: string;
  totalDistanceKm: number;
  baseIntervalMinutes: number;
  frequencyPerHour: number;
  stops: BusRouteStop[];
}

export interface ETAPredictionInput {
  baseTimeMinutes: number; // e.g. 8:00 AM = 480
  stopOffsetMinutes: number;
  conductorDelayAdjustmentMinutes?: number;
  trafficFactor?: number; // 1.0 = normal, 1.2 = moderate peak, 1.4 = heavy congestion
  historicalVarianceMinutes?: number;
}

export interface ETAPredictionResult {
  estimatedArrivalMinutes: number;
  estimatedArrivalFormatted: string;
  delayStatus: 'on-time' | 'minor-delay' | 'significant-delay';
  confidenceScore: number; // 0 to 100 percentage
  method: 'heuristic-timetabled-interval' | 'conductor-updated-live';
  infrastructureCost: 'zero-hardware-capital' | 'high-gps-telemetry';
}

/**
 * Format total minutes from midnight into 12-hour or 24-hour time string "HH:MM AM/PM"
 */
export function formatMinutesToTime(totalMinutes: number): string {
  const normalized = ((Math.floor(totalMinutes) % 1440) + 1440) % 1440;
  const hours24 = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  const period = hours24 >= 12 ? 'PM' : 'AM';
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const paddedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hours12}:${paddedMinutes} ${period}`;
}

/**
 * Calculate Heuristic ETA for a given stop on a route
 */
export function calculateHeuristicETA(input: ETAPredictionInput): ETAPredictionResult {
  const traffic = Math.max(0.8, Math.min(input.trafficFactor ?? 1.0, 2.0));
  const conductorAdjustment = input.conductorDelayAdjustmentMinutes ?? 0;
  const historicalVariance = input.historicalVarianceMinutes ?? 0;

  // Base calculation: origin departure + (stop offset * traffic factor) + conductor updates + variance
  const adjustedOffset = input.stopOffsetMinutes * traffic;
  const predictedMinutes = Math.round(
    input.baseTimeMinutes + adjustedOffset + conductorAdjustment + historicalVariance
  );

  const delayDelta = (predictedMinutes - (input.baseTimeMinutes + input.stopOffsetMinutes));
  
  let delayStatus: ETAPredictionResult['delayStatus'] = 'on-time';
  if (delayDelta > 8) {
    delayStatus = 'significant-delay';
  } else if (delayDelta > 2) {
    delayStatus = 'minor-delay';
  }

  // If conductor provided live update, confidence increases
  const hasLiveConductorPing = conductorAdjustment !== 0;
  const confidenceScore = hasLiveConductorPing ? 92 : Math.max(65, Math.round(85 - Math.abs(delayDelta) * 2));

  return {
    estimatedArrivalMinutes: predictedMinutes,
    estimatedArrivalFormatted: formatMinutesToTime(predictedMinutes),
    delayStatus,
    confidenceScore,
    method: hasLiveConductorPing ? 'conductor-updated-live' : 'heuristic-timetabled-interval',
    infrastructureCost: 'zero-hardware-capital',
  };
}

/**
 * Filter and search case study items or portfolio tags
 */
export function filterContent<T extends { title: string; category?: string; tags?: string[] }>(
  items: T[],
  query: string,
  selectedCategory?: string
): T[] {
  const normalizedQuery = query.trim().toLowerCase();
  
  return items.filter((item) => {
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === 'all' ||
      item.category?.toLowerCase() === selectedCategory.toLowerCase();

    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const matchesTitle = item.title.toLowerCase().includes(normalizedQuery);
    const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(normalizedQuery)) ?? false;

    return matchesTitle || matchesTags;
  });
}
