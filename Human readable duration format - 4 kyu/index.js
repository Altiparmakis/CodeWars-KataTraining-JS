function formatDuration(seconds) {
  if (seconds === 0) return "now";
  const timeUnits = {
    year: 31536000, // 365 * 24 * 60 * 60
    day: 86400, // 24 * 60 * 60
    hour: 3600, // 60 * 60
    minute: 60,
    second: 1,
  };

  const result = [];

  for (let unit in timeUnits) {
    const unitValue = timeUnits[unit];
    const count = Math.floor(seconds / unitValue);

    if (count > 0) {
      result.push(`${count} ${unit}${count > 1 ? "s" : ""}`);
      seconds %= unitValue;
    }
  }

  return result.length > 1
    ? result.slice(0, -1).join(", ") + " and " + result.slice(-1)
    : result[0];
}
