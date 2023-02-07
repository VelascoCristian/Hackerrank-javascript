function pickingNumbers(a) {
    a.sort((a, b) => a - b);
    let subArr = [];
    for (let i = 0; i < a.length; i++) {
        subArr.push(a.filter(num => num === a[i] || num === a[i] + 1).length);
    }
    return Math.max(...subArr);
}