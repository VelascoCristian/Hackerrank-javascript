function diagonalDifference(arr) {
    let secondaryDiagonal = 0, primaryDiagonal = 0;
    for (let i = 0; i < arr[0].length ; i++) {
        primaryDiagonal += arr[i][i];
    }
    for (let i = arr[0].length - 1, j = 0;
     i >= 0 && j < arr[0].length; i--, j++) {
        secondaryDiagonal += arr[i][j];
    }
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}