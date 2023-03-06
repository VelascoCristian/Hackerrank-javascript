function misereNim(s) {
  const n = s.length;
  const sum = s.reduce((acc, val) => acc + val, 0);
  const allElementsAreOne = sum === n;
  if (allElementsAreOne) {
    return n % 2 === 0 ? "First" : "Second";
  } else {
    const xo = s.reduce((acc, val) => acc ^ val, 0);
    return xo === 0 ? "Second" : "First";
  }
}
