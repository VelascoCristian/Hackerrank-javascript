function fizzBuzz(n) {
    let count = 0;
    for (let i = 1; i < n+1; i++) {
        if (i % 3 == 0) count += 1
        if (i % 5 == 0) count += 2
        if (count == 0) {
            console.log(i);
        } else if (count === 1) {
            console.log("Fizz");
        } else if (count === 2) {
            console.log("Buzz");
        } else if (count === 3) {
            console.log("FizzBuzz");
        }
        count = 0;
    } 
}