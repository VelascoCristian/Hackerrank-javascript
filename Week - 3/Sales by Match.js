function sockMerchant(n, ar) {
    let numCounts = {};
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        let num = ar[i];
        (num in numCounts)
        ? numCounts[num]++
        :numCounts[num] = 1
    }
    const duplicatePairs = [];
    for (let num in numCounts) {
        if (numCounts[num] > 1) {
        duplicatePairs.push([num, numCounts[num]]);
        }
    }
    for (let i = 0; i < duplicatePairs.length; i++) {
        while (duplicatePairs[i][1] - 2 >= 0) {
            duplicatePairs[i][1] -= 2;
            count++
        }
    }
    return count;
}