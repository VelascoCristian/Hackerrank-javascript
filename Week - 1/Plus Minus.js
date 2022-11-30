function plusMinus(arr) {
    let positive = 0, negative = 0, zero = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    console.log(positive/arr.length);
    console.log(negative/arr.length);
    console.log(zero/arr.length);
}