function lonelyinteger(a) {
    let arr = [-1];
    a = a.sort(function (a, b) {  return a - b;  });
    for (let i = 0; i < a.length; i++) {
        (arr.includes(a[i]) === false)
         ? arr.push(a[i]) 
         : arr.splice(arr.indexOf(a[i]));
    }
    return arr[1];
}