//Precaution some solutions works on vscode (or anything editor), but in the test may fail, this solution is ok
function processData(input) {
    const string = input.split('\r\n'); 
    let result = '';
    for (const line of string) {
        const [param1, param2, word] = line.split(';');
        let result = getResult(param1, param2, word);
        console.log(result);
    }
} 

const findUppercase = (text) => text.match(/[A-Z]/g);

const indexZeroUpperCase = (text) => {
    text = text.replace(text.charAt(0), text.charAt(0).toUpperCase());
    return text;
}
const indexZeroLowerCase = (text) => {
    text = text.replace(text.charAt(0), text.charAt(0).toLowerCase());
    return text;
}

function getResult(param1, param2, word) {
    if (param1 == 'S') {
        let letters = findUppercase(word);
        for (const letter of letters) {
            let index = word.indexOf(letter);
            if (index !== 0) {
                word = word.slice(0, index) + " " + word.slice(index);
            }
        }
        word = word.toLowerCase();
    }

    if (param1 == 'C') {
        word = word.toLowerCase();
        let words = word.split(' ');
        for (const [x, y] of words.entries()) {
            if (x !== 0 || param2 == 'C') {
                words[x] = indexZeroUpperCase(words[x]);
            }
        }
        word = words.join('');
    }
    
    if (param2 == 'M') {
        if (word.includes('()')){
            word = word.replace('()', '');
        }
        else {
            word = word + "()";
        }
    }
    return word;
}