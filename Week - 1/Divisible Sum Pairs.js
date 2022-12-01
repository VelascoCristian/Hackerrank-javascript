function divisibleSumPairs(n, k, ar) {
    let count = 0, position = 0;
    while (ar.length > position) {
        for (let i = 0; i < ar.length; i++) {
            if ((ar[position] + ar[i]) % 3 === 0) {
                if (ar[position] < ar[i]) count++;
            }
        }
        position++;
    }
    return count
}