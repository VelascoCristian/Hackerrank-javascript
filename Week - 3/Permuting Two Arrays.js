function twoArrays(k, A, B) {
    let count = 0;
    let orderArrayB = B.sort(function (a, b) {  return a - b;  });
    let orderArrayA = A.sort(function (a, b) {  return a - b;  }).reverse();
    for (let i = 0; i < A.length; i++) {
        if (orderArrayA[i] + orderArrayB[i] >= k) count++;   
    }
    if (count === A.length) return "YES";
    return "NO";
}
