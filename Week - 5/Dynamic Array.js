function dynamicArray(n, queries) {
    const dynamic_arr = new Map();
    const ans = [];
    let last_answer = 0;

    for (const [type, x, y] of queries) {
        const idx = (x ^ last_answer) % n;
        if (type === 1) {
            const arr = dynamic_arr.get(idx) || [];
            arr.push(y);
            dynamic_arr.set(idx, arr);
        } else {
            const arr = dynamic_arr.get(idx) || [];
            const value = arr[y % arr.length];
            last_answer = value !== undefined ? value : last_answer;
            ans.push(last_answer);
      }
    }
    return ans;
}