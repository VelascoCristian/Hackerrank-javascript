function missingNumbers(arr, brr) {
    const m = new Set(arr);
    const n = new Set(brr);

    let missing = [];
    for (let num of n) {
        if (!m.has(num)) {
            missing.push(num);
        }
    }
    return missing.sort((a, b) => a - b);
}