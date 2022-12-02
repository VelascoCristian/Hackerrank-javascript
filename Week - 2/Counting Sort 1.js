function countingSort(arr) {
    let array = Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) array[arr[i]]++;
    return array;
}