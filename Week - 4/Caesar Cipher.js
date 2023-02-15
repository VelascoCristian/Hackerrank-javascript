function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (alphabet.includes(char.toLowerCase())) {
            let isUpperCase = char === char.toUpperCase();
            let index = alphabet.indexOf(char.toLowerCase());
            let shiftedIndex = (index + k) % alphabet.length;
            let shiftedChar = alphabet[shiftedIndex];
            result += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
        } else {
            result += char;
        }
    }
    return result;
}