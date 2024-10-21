function digitalRoot(n) {
  let keep = true;
  let answer;
  while (keep) {
    let myNums = n.toString().split("").map(Number);
    let sum = 0;
    myNums.forEach((num) => {
      sum += num;
    });
    if (sum.toString().split("").length === 1) {
      keep = false;
      answer = sum;
    } else {
      n = sum.toString();
    }
  }
  return answer;
}
