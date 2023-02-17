function maxMin(k, arr) {
    arr.sort((a, b) => a - b);
    let minUnfairness = Infinity;
    let left = 0;
    let right = k - 1;
    while (right < arr.length) {
        const max = arr[right];
        const min = arr[left];
        const unfairness = max - min;
        if (unfairness < minUnfairness) {
            minUnfairness = unfairness;
        }
        left++;
        right++;
    }
    return minUnfairness;
}