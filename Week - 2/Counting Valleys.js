function countingValleys(steps, path) {
    let height = 0, seaLevel = 0;
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "U") {
            if (height === -1) {
                seaLevel++
            }
            height++; 
        } else {
            height--
        }
    }
    return seaLevel
}