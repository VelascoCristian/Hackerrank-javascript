function miniMaxSum(arr) {
    let low, high, orderArray;
    
    orderArray = arr.sort(function (a, b) {  return a - b;  });
    
    low = orderArray[0] + orderArray[1] + orderArray[2] + orderArray[3];
    high = low - orderArray[0] + orderArray[4];
    
    console.log(low, high);
}