function closestNumbers(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            result = [];
        }
        if (diff === minDiff) {
            result.push(arr[i - 1], arr[i]);
        }
    }
    return result;
}