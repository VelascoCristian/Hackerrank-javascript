function superDigit(n, k) {
  let arr = [...n.toString()].map(Number);
  let digit = arr.reduce((acc, curr) => acc + curr, 0) * k;
  while (digit > 9) {
    arr = [...digit.toString()].map(Number);
    digit = arr.reduce((acc, curr) => acc + curr, 0);
  }
  return digit;
}
