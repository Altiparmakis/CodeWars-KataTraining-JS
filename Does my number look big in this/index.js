function narcissistic(value) {
  let valueString = value.toString();
  let table = valueString.split("").map(Number);
  let sum = 0;
  for (let i = 0; i < table.length; i++) {
    sum += table[i] ** table.length;
  }

  return sum === value;
}
