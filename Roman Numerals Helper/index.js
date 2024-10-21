class RomanNumerals {
  static calc(n) {
    if (n === 1000) {
      return "M";
    } else if (n === 900) {
      return "CM";
    } else if (n === 500) {
      return "D";
    } else if (n === 400) {
      return "CD";
    } else if (n === 100) {
      return "C";
    } else if (n === 90) {
      return "XC";
    } else if (n === 50) {
      return "L";
    } else if (n === 40) {
      return "XL";
    } else if (n === 10) {
      return "X";
    } else if (n === 9) {
      return "IX";
    } else if (n === 5) {
      return "V";
    } else if (n === 4) {
      return "IV";
    } else if (n === 1) {
      return "I";
    }
  }
  static calc2(n) {
    if (n === "M") {
      return 1000;
    } else if (n === "CM") {
      return 900;
    } else if (n === "D") {
      return 500;
    } else if (n === "CD") {
      return 400;
    } else if (n === "C") {
      return 100;
    } else if (n === "XC") {
      return 90;
    } else if (n === "L") {
      return 50;
    } else if (n === "XL") {
      return 40;
    } else if (n === "X") {
      return 10;
    } else if (n === "IX") {
      return 9;
    } else if (n === "V") {
      return 5;
    } else if (n === "IV") {
      return 4;
    } else if (n === "I") {
      return 1;
    }
  }

  static toRoman(num) {
    let result = "";
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (const value of values) {
      while (num >= value) {
        result += RomanNumerals.calc(value);
        num -= value;
      }
    }
    return result;
  }
  static fromRoman(num) {
    let result = 0;
    const values = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

    for (const value of values) {
      while (num.startsWith(value)) {
        result += RomanNumerals.calc2(value);
        num = num.slice(value.length);
      }
    }
    return result;
  }
}
