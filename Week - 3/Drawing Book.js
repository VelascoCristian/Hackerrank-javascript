function pageCount(n, p) {
    let flips = 0;
    let frontTurns = Math.floor(p / 2);
    let backTurns = Math.floor(n / 2) - frontTurns;
    flips = Math.min(frontTurns, backTurns);
    return flips;
}