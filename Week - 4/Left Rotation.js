function rotateLeft(d, arr) {
    for (let i = 0; i < d; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }
    return arr;
}