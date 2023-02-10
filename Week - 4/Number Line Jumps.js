function kangaroo(x1, v1, x2, v2) {
    let diff = x2 - x1;
    if (v1 > v2 && diff % (v1 - v2) === 0) {
        return "YES";
    } else {
        return "NO";
    }
}