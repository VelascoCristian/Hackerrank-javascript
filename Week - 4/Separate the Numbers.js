function separateNumbers(s) {
    let beautiful = false;
    for (let i = 1; i <= s.length / 2; i++) {
        let firstNum = s.substring(0, i);
        let sequence = firstNum;
        let newNumber = BigInt(firstNum);
        while (sequence.length < s.length) {
            newNumber++;
            sequence += newNumber.toString();
        }

        if (sequence === s) {
            beautiful == true;
            console.log('YES ' + firstNum)
            return;
        } 
    }
    if (!beautiful) {
        console.log('NO')
    }
}