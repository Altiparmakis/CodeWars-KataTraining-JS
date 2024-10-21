function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [signature[0]];
  } else if (n === 2) {
    return [signature[0], signature[1]];
  } else if (n === 3) {
    return signature;
  }

  while (signature.length < n) {
    let sum = signature.slice(-3).reduce((a, b) => a + b, 0);
    signature.push(sum);
  }

  return signature;
}
