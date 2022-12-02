function gradingStudents(grades) {
    let gradesPlus = grades;
    for (let i = 0; i < grades.length; i++) {
        if (gradesPlus[i] + 2 >= 40) {
            if ((gradesPlus[i] + 2) % 5 == 0){
                gradesPlus[i] += 2
            } else if ((gradesPlus[i] + 1) % 5 == 0) gradesPlus[i] += 1
        }
    }
    return gradesPlus
}