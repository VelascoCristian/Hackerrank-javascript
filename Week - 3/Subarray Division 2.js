function birthday(s, d, m) {
    let count = 0, i = 0, j = m;
    while (j <= s.length) {
        if ((s.slice(i, j).reduce((a,b) => a + b)) === d)
            count += 1;
        i += 1;
        j += 1;
    }
    return count;
}