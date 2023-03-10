function formingMagicSquare(s) {
  let minCost = Number.MAX_VALUE;

  const magicSquares = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
  ];

  for (let i = 0; i < magicSquares.length; i++) {
    const cost =
      Math.abs(s[0][0] - magicSquares[i][0]) +
      Math.abs(s[0][1] - magicSquares[i][1]) +
      Math.abs(s[0][2] - magicSquares[i][2]) +
      Math.abs(s[1][0] - magicSquares[i][3]) +
      Math.abs(s[1][1] - magicSquares[i][4]) +
      Math.abs(s[1][2] - magicSquares[i][5]) +
      Math.abs(s[2][0] - magicSquares[i][6]) +
      Math.abs(s[2][1] - magicSquares[i][7]) +
      Math.abs(s[2][2] - magicSquares[i][8]);

    if (cost < minCost) {
      minCost = cost;
    }
  }

  return minCost;
}
