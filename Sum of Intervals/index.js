function isOverlapping(interval1, interval2) {
  const [a, b] = interval1;
  const [c, d] = interval2;
  return a < d && c < b;
}
function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let currentInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const nextInterval = intervals[i];

    if (isOverlapping(currentInterval, nextInterval)) {
      currentInterval = [
        Math.min(currentInterval[0], nextInterval[0]),
        Math.max(currentInterval[1], nextInterval[1]),
      ];
    } else {
      merged.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  merged.push(currentInterval);
  return merged;
}

function sumIntervals(intervals) {
  const mergedIntervals = mergeIntervals(intervals);
  let sum = 0;

  for (const [a, b] of mergedIntervals) {
    sum += b - a;
  }

  return sum;
}
