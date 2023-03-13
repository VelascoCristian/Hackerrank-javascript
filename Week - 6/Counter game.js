function counterGame(n) {
  let player = "Louise";
  let rounds = 0;

  if (n === 1) {
    return "Richard";
  }

  while (true) {
    let log = Math.log2(n);

    if (n !== 1) {
      if (log % 1 === 0) {
        n /= 2;
      } else {
        n -= Math.pow(2, Math.floor(log));
      }
    }

    rounds++;

    if (n === 1) {
      break;
    }
  }

  return rounds % 2 === 1 ? "Louise" : "Richard";
}
