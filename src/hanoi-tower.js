module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnsNumber = 0;
    for (let i = 1; i <= disksNumber; i++) {
        if (i == 1) {
            turnsNumber = 1;
        } else {
            turnsNumber = 2 * turnsNumber + 1;
        }
    }

    let seconds = turnsNumber / (turnsSpeed / 3600);

    let result = {};
    result['turns'] = turnsNumber;
    result['seconds'] = seconds;

    return result;
}