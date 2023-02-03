function migratoryBirds(arr) {
    let frequency = {};
    let maxFrequency = 0;
    let result = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
        if (frequency[arr[i]] > maxFrequency) {
            maxFrequency = frequency[arr[i]];
            result = arr[i];
        } else if (frequency[arr[i]] === maxFrequency) {
        result = Math.min(result, arr[i]);
        }
    }
    return result;
}