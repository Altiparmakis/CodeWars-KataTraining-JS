function pigIt(str) {
  const punctuationRegex = /^[.,\/#!$%\^&\*;:{}=\-_`~()?"'[\]\\]+$/;
  const arr = str.split(" ");
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    let begin = arr[i].slice(0, 1);
    if (punctuationRegex.test(arr[i])) {
      final.push(arr[i]);
    } else {
      let t = arr[i].slice(1) + begin + "ay";
      final.push(t);
    }
  }
  return final.join(" ");
}
