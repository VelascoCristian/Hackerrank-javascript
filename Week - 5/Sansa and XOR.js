function sansaXor(arr) {
    let xorSum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let frequency = (i + 1) * (n - i);
        if (frequency % 2 === 1) {
            xorSum ^= arr[i];
        }
    }
    return xorSum;
}