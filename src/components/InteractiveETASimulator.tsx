import React, { useState } from 'react';
import { 
  Bus, 
  Clock, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Sliders, 
  RefreshCw,
  ShieldCheck
} from 'lucide-react';
import { calculateHeuristicETA, BusRoute } from '../utils/etaCalculator';

export const InteractiveETASimulator: React.FC = () => {
  // Sample Nashik routes based on the real 90-route network
  const sampleRoutes: BusRoute[] = [
    {
      id: 'route-101',
      name: 'Route 101: CBS ⇄ Uttam Nagar (via Konark Nagar)',
      source: 'CBS Central Bus Depot',
      destination: 'Uttam Nagar',
      via: 'Konark Nagar',
      totalDistanceKm: 14.5,
      baseIntervalMinutes: 20,
      frequencyPerHour: 3,
      stops: [
        { id: 's1', name: 'CBS Central Bus Depot (Origin)', sequence: 1, scheduledOffsetMinutes: 0 },
        { id: 's2', name: 'Shalimar Chowk', sequence: 2, scheduledOffsetMinutes: 6 },
        { id: 's3', name: 'Dwarka Circle', sequence: 3, scheduledOffsetMinutes: 14 },
        { id: 's4', name: 'Konark Nagar Bus Stand', sequence: 4, scheduledOffsetMinutes: 24 },
        { id: 's5', name: 'Ambad Industrial Link', sequence: 5, scheduledOffsetMinutes: 32 },
        { id: 's6', name: 'Uttam Nagar Terminal', sequence: 6, scheduledOffsetMinutes: 42 },
      ]
    },
    {
      id: 'route-102',
      name: 'Route 102: Nimani ⇄ Gangapur Road (College Hub)',
      source: 'Nimani Bus Stand',
      destination: 'Gangapur Road',
      via: 'College Road',
      totalDistanceKm: 11.2,
      baseIntervalMinutes: 15,
      frequencyPerHour: 4,
      stops: [
        { id: 's10', name: 'Nimani Bus Stand (Origin)', sequence: 1, scheduledOffsetMinutes: 0 },
        { id: 's11', name: 'Panchavati Karanja', sequence: 2, scheduledOffsetMinutes: 5 },
        { id: 's12', name: 'Ashok Stambh', sequence: 3, scheduledOffsetMinutes: 12 },
        { id: 's13', name: 'College Road (KTHM / BYK Colleges)', sequence: 4, scheduledOffsetMinutes: 20 },
        { id: 's14', name: 'Vidya Vikas Circle', sequence: 5, scheduledOffsetMinutes: 28 },
        { id: 's15', name: 'Gangapur Road Octroi Post', sequence: 6, scheduledOffsetMinutes: 36 },
      ]
    },
    {
      id: 'route-103',
      name: 'Route 103: CBS ⇄ Nashik Road Railway Station',
      source: 'CBS Central Bus Depot',
      destination: 'Nashik Road Railway Station',
      via: 'Dwarka & Bytco Point',
      totalDistanceKm: 10.8,
      baseIntervalMinutes: 10,
      frequencyPerHour: 6,
      stops: [
        { id: 's20', name: 'CBS Central Bus Depot (Origin)', sequence: 1, scheduledOffsetMinutes: 0 },
        { id: 's21', name: 'Dwarka Junction', sequence: 2, scheduledOffsetMinutes: 8 },
        { id: 's22', name: 'Datir Farm / Upnagar', sequence: 3, scheduledOffsetMinutes: 17 },
        { id: 's23', name: 'Bytco Hospital / Point', sequence: 4, scheduledOffsetMinutes: 26 },
        { id: 's24', name: 'Nashik Road Railway Station', sequence: 5, scheduledOffsetMinutes: 34 },
      ]
    }
  ];

  const [selectedRouteId, setSelectedRouteId] = useState<string>('route-101');
  const [baseDepartureTimeMinutes, setBaseDepartureTimeMinutes] = useState<number>(480); // 8:00 AM
  const [trafficFactor, setTrafficFactor] = useState<number>(1.0); // 1.0 = normal, 1.3 = peak
  const [conductorDelayOffset, setConductorDelayOffset] = useState<number>(0); // in minutes

  const currentRoute = sampleRoutes.find(r => r.id === selectedRouteId) || sampleRoutes[0];

  const handleReset = () => {
    setTrafficFactor(1.0);
    setConductorDelayOffset(0);
    setBaseDepartureTimeMinutes(480);
  };

  return (
    <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Title */}
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
          <span>Interactive Product Simulator</span>
          <span aria-hidden="true">·</span>
          <span>Heuristic ETA Engine</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
          Simulate the Heuristic ETA Architecture
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Test how our zero-hardware algorithm calculated reliable arrival times for 70,000+ commuters using only timetable intervals and 1-tap conductor departure signals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Route Selector */}
          <div className="p-5 rounded-xl border border-neutral-200 bg-white space-y-4 shadow-2xs">
            <div>
              <label className="text-xs font-mono uppercase text-neutral-500 font-semibold block mb-2">
                1. Select Nashik Transit Route
              </label>
              <select
                value={selectedRouteId}
                onChange={(e) => setSelectedRouteId(e.target.value)}
                className="w-full text-xs sm:text-sm font-medium border border-neutral-300 rounded-lg p-2.5 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              >
                {sampleRoutes.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Scheduled Departure Picker */}
            <div>
              <label className="text-xs font-mono uppercase text-neutral-500 font-semibold block mb-2">
                2. Scheduled Terminal Departure
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '8:00 AM (Morning)', minutes: 480 },
                  { label: '1:00 PM (Midday)', minutes: 780 },
                  { label: '5:30 PM (Evening)', minutes: 1050 }
                ].map((slot) => (
                  <button
                    key={slot.minutes}
                    onClick={() => setBaseDepartureTimeMinutes(slot.minutes)}
                    className={`py-2 px-2 text-xs rounded-md border text-center transition-all ${
                      baseDepartureTimeMinutes === slot.minutes
                        ? 'border-neutral-900 bg-neutral-900 text-white font-medium shadow-xs'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Traffic Factor Slider */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-mono uppercase text-neutral-500 font-semibold">
                  3. Road Traffic / Congestion Factor
                </label>
                <span className="text-xs font-mono text-neutral-800 font-bold">
                  {trafficFactor === 1.0 ? 'Normal (1.0x)' : trafficFactor === 1.25 ? 'Moderate (1.25x)' : 'Severe Peak (1.5x)'}
                </span>
              </div>
              <input
                type="range"
                min="0.9"
                max="1.6"
                step="0.05"
                value={trafficFactor}
                onChange={(e) => setTrafficFactor(parseFloat(e.target.value))}
                className="w-full accent-neutral-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                <span>Free Flow (Off-peak)</span>
                <span>Standard</span>
                <span>Heavy Peak</span>
              </div>
            </div>

            {/* Conductor Live Operational Ping */}
            <div>
              <label className="text-xs font-mono uppercase text-neutral-500 font-semibold block mb-2">
                4. Conductor Terminal Signal (Figure 10)
              </label>
              <div className="space-y-2">
                {[
                  { label: 'Departed On Schedule (±0 min)', delay: 0 },
                  { label: 'Depot Hold / Bus Bay Delay (+8 min)', delay: 8 },
                  { label: 'Mechanical Swap / Inspection (+16 min)', delay: 16 }
                ].map((opt) => (
                  <button
                    key={opt.delay}
                    onClick={() => setConductorDelayOffset(opt.delay)}
                    className={`w-full py-2 px-3 text-xs rounded-lg border text-left transition-all flex items-center justify-between ${
                      conductorDelayOffset === opt.delay
                        ? 'border-neutral-900 bg-neutral-100 text-neutral-900 font-semibold'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {conductorDelayOffset === opt.delay && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset */}
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to baseline conditions</span>
              </button>
            </div>
          </div>

          {/* PM Value Comparison Card */}
          <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs space-y-3">
            <div className="font-semibold text-neutral-900 text-sm">
              The Trade-off that saved the project:
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded bg-white border border-rose-200 text-rose-900">
                <div className="font-bold text-[11px] mb-1">GPS Telemetry</div>
                <div>• Hardware: ₹15,000 / bus</div>
                <div>• Total CapEx: ₹16.5 Lakhs</div>
                <div>• Result: Blocked by deficit</div>
              </div>
              <div className="p-2.5 rounded bg-white border border-emerald-300 text-emerald-950">
                <div className="font-bold text-[11px] mb-1">Heuristic Engine</div>
                <div>• Hardware: ₹0 (BYOD phone)</div>
                <div>• Total CapEx: ₹0</div>
                <div>• Result: Deployable in 6 mos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Column: Live Arrival Table */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-xl border border-neutral-200 bg-white shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-neutral-200">
              <div>
                <h3 className="font-bold text-neutral-900 text-base">
                  Predicted Stop Arrival Timeline
                </h3>
                <div className="text-xs text-neutral-500 mt-0.5">
                  Route Distance: {currentRoute.totalDistanceKm} km · Frequency: Every {currentRoute.baseIntervalMinutes} mins
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  conductorDelayOffset === 0
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-amber-50 text-amber-700'
                }`}>
                  {conductorDelayOffset === 0 ? 'Status: On Schedule' : `Status: +${conductorDelayOffset}m Departure Hold`}
                </span>
              </div>
            </div>

            {/* Stops Timeline */}
            <div className="relative pl-6 space-y-6 pt-6">
              {/* Vertical line indicator */}
              <div className="absolute left-2.5 top-8 bottom-6 w-0.5 bg-neutral-200" />

              {currentRoute.stops.map((stop, idx) => {
                const prediction = calculateHeuristicETA({
                  baseTimeMinutes: baseDepartureTimeMinutes,
                  stopOffsetMinutes: stop.scheduledOffsetMinutes,
                  trafficFactor: trafficFactor,
                  conductorDelayAdjustmentMinutes: conductorDelayOffset,
                });

                const isTerminal = idx === 0;
                const isFinal = idx === currentRoute.stops.length - 1;

                return (
                  <div key={stop.id} className="relative flex items-start justify-between gap-4">
                    {/* Dot on line */}
                    <div className={`absolute -left-[19px] top-1 w-3 h-3 rounded-full border-2 bg-white ${
                      isTerminal || isFinal ? 'border-neutral-900 bg-neutral-900' : 'border-neutral-400'
                    }`} />

                    <div className="space-y-0.5">
                      <div className="text-sm font-semibold text-neutral-900 flex items-center gap-1.5">
                        <span>{stop.name}</span>
                        {isTerminal && <span className="text-[10px] text-neutral-400 font-mono">(Departure Point)</span>}
                        {isFinal && <span className="text-[10px] text-neutral-400 font-mono">(Terminus)</span>}
                      </div>
                      <div className="text-xs text-neutral-500">
                        Stop #{stop.sequence} · Scheduled Segment: +{stop.scheduledOffsetMinutes} mins
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-sm font-mono font-bold text-neutral-900">
                        {prediction.estimatedArrivalFormatted}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400">
                        Confidence: {prediction.confidenceScore}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Commuter Experience Preview Note */}
            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>Simulated Commuter App Output</span>
              </span>
              <span className="font-mono text-neutral-700">
                Data Layer: JSON Timetable + Conductor Trigger
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
