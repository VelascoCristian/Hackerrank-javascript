function minimumNumber(n, password) {
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";
    let missingTypes = 0;

    if (!password.match(/[0-9]/)) {
        missingTypes++;
    }
    if (!password.match(/[a-z]/)) {
        missingTypes++;
    }
    if (!password.match(/[A-Z]/)) {
        missingTypes++;
    }
    if (!password.match(/[!@#$%^&*()\-+]/)) {
        missingTypes++;
    }

    let totalMissing = Math.max(6 - n, missingTypes);
    return totalMissing;
}