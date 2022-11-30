function breakingRecords(scores) {
    let min = scores[0], max = scores[0], minCount = 0, maxCount = 0;
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] > max) {
            max = scores[i];
            maxCount++;
        } else if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }
    return [maxCount, minCount];
}