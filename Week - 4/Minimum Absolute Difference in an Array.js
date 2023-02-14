function minimumAbsoluteDifference(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            const abDiff = Math.abs(arr[i] - arr[j]);
            if (abDiff < min) {
                min = abDiff; 
            }
        }
    }
    return min;
}