function pangrams(s) {
    const cant = new Set(s).size;
    return cant === 27
    ? "pangram"
    : "not pangram"
}