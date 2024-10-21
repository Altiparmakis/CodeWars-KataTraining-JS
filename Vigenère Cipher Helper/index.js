function makeThePass(str, key) {
  let pass = key;
  while (pass.length < str.length) {
    pass += key;
  }
  return pass.slice(0, str.length);
}

function VigenereCipher(key, abc) {
  this.encode = function (str) {
    let ret = "";
    const pass = makeThePass(str, key).split("");
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      const char = arr[i];
      if (abc.includes(char)) {
        let indexW = abc.indexOf(pass[i]);
        ret += abc[(abc.indexOf(char) + indexW) % abc.length];
      } else {
        ret += char;
      }
    }
    return ret;
  };
  this.decode = function (str) {
    let ret = "";
    const pass = makeThePass(str, key).split("");
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      const char = arr[i];
      if (abc.includes(char)) {
        let indexW = abc.indexOf(pass[i]);
        let newIndex = (abc.indexOf(char) - indexW + abc.length) % abc.length;
        ret += abc[newIndex];
      } else {
        ret += char;
      }
    }
    return ret;
  };
}
