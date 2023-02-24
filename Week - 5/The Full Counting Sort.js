function countSort(arr) {
    let max = arr[0][0];
    let min = arr[0][0];
    let halfIndex = Math.floor(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {
        let [num, str] = arr[i];
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
        if (i < halfIndex) {
            arr[i][1] = '-';
        }
    }
    let helperArray = new Array(max - min + 1).fill(null).map(() => []);
    for (let i = 0; i < arr.length; i++) {
        let [num, str] = arr[i];
        helperArray[num - min].push(str);
    }
    let result = [];
    for (let i = 0; i < helperArray.length; i++) {
        result.push(...helperArray[i]);
    }
    console.log(result.join(' '));
}