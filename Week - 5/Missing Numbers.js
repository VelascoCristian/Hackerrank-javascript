function missingNumbers(arr, brr) {
    let freq = {};
    let missing = new Set();
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    for (let num of brr) {
        freq[num] = (freq[num] || 0) - 1;
    }
    for (let num in freq) {
        if (freq[num] !== 0) {
            missing.add(+num);
        }
    }
    return Array.from(missing).sort((a, b) => a - b);
}
