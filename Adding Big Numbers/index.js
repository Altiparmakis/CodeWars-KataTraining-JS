function add(a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();
  let maxLen = Math.max(a.length, b.length);
  let sum = [];
  let remainder = 0;
  for (let i = 0; i < maxLen; i++) {
    let x = parseInt(a[i]) ? parseInt(a[i]) : 0;
    let y = parseInt(b[i]) ? parseInt(b[i]) : 0;
    let digit = (x + y + remainder) % 10;
    remainder = Math.floor((x + y + remainder) / 10);
    sum.unshift(digit);
  }
  if (remainder) {
    sum.unshift(remainder);
  }

  return sum.join("");
}
