import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatMinutesToTime,
  calculateHeuristicETA,
  filterContent,
} from './etaCalculator';

test('formatMinutesToTime correctly formats minutes to 12-hour AM/PM string', () => {
  assert.equal(formatMinutesToTime(480), '8:00 AM');
  assert.equal(formatMinutesToTime(750), '12:30 PM');
  assert.equal(formatMinutesToTime(815), '1:35 PM');
  assert.equal(formatMinutesToTime(0), '12:00 AM');
});

test('calculateHeuristicETA generates correct predictable ETA without live conductor update', () => {
  const result = calculateHeuristicETA({
    baseTimeMinutes: 540, // 9:00 AM
    stopOffsetMinutes: 20, // 20 mins to stop
    trafficFactor: 1.0,
  });

  assert.equal(result.estimatedArrivalMinutes, 560);
  assert.equal(result.estimatedArrivalFormatted, '9:20 AM');
  assert.equal(result.delayStatus, 'on-time');
  assert.equal(result.method, 'heuristic-timetabled-interval');
  assert.equal(result.infrastructureCost, 'zero-hardware-capital');
});

test('calculateHeuristicETA adapts when conductor provides operational delay offset', () => {
  const result = calculateHeuristicETA({
    baseTimeMinutes: 540, // 9:00 AM
    stopOffsetMinutes: 15,
    conductorDelayAdjustmentMinutes: 10, // Conductor noted 10 min depot hold
  });

  assert.equal(result.estimatedArrivalMinutes, 565); // 9:25 AM
  assert.equal(result.estimatedArrivalFormatted, '9:25 AM');
  assert.equal(result.delayStatus, 'significant-delay');
  assert.equal(result.method, 'conductor-updated-live');
  assert.equal(result.confidenceScore, 92);
});

test('filterContent filters by category and search query correctly', () => {
  const sampleItems = [
    { title: 'Nashik Bus Assistant', category: 'mobility', tags: ['transit', 'heuristics'] },
    { title: 'Genetic Algorithm Scheduler', category: 'optimization', tags: ['algorithm', 'fleet'] },
    { title: 'Commuter App Wireframes', category: 'design', tags: ['mobile', 'wireframes'] },
  ];

  const mobilityItems = filterContent(sampleItems, '', 'mobility');
  assert.equal(mobilityItems.length, 1);
  assert.equal(mobilityItems[0].title, 'Nashik Bus Assistant');

  const searchTransit = filterContent(sampleItems, 'transit', 'all');
  assert.equal(searchTransit.length, 1);
  assert.equal(searchTransit[0].title, 'Nashik Bus Assistant');

  const emptyResults = filterContent(sampleItems, 'nonexistent', 'all');
  assert.equal(emptyResults.length, 0);
});
