function pangrams(s) {
    const cant = new Set(s.toLowerCase()).size;
    return cant === 27
    ? "pangram"
    : "not pangram"
}
