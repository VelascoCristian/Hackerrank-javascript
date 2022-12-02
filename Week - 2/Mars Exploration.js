function marsExploration(s) {
    let correctMsj = [], count = 0, wrongLetter = 0;
    count = s.length / 3;
    for (let i = 0; i < count; i++) {
        correctMsj.push("S");
        correctMsj.push("O");
        correctMsj.push("S");
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] != correctMsj[i]) wrongLetter++
    }
    return wrongLetter;
}