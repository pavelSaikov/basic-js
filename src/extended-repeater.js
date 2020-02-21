module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes;
    let separator = options.separator || '+';
    let addition = options.addition;
    let additionSeparator = options.additionSeparator || '|';
    let additionRepeatTimes = options.additionRepeatTimes;
    let result = '';

    if(repeatTimes != null && repeatTimes != 0) {
        for(let i = 1; i <= repeatTimes; i++) {
            result += str;

            if(additionRepeatTimes != null && additionRepeatTimes != 0) {
                for(let j = 1; j <= additionRepeatTimes; j++) {
                    if(!(addition === undefined)) result += addition;
                    if(j != additionRepeatTimes) result += additionSeparator;
                }
            }
            
            if(i != repeatTimes) result += separator;
            
        }
    } else {
        result = str;
        if(addition != null)
        result += addition;
    }


    return result;
};
