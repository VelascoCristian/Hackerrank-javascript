function matchingStrings(strings, queries) {
    let arr = [], count = 0;
    for (let i = 0; i < queries.length; i++) {
        for(let j = 0; j < strings.length; j++) {
            if (queries[i] == strings[j]) count++
        }
        arr[i] = count;
        count = 0;
    }
    return arr
}