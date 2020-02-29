module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw new Error();

    const transformedArr = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;

            case '--discard-prev':
                transformedArr.pop();
                break;

            case '--double-prev':
                if (i != 0) transformedArr.push(arr[i - 1]);
                break;

            case '--double-next':
                if (i + 1 != arr.length) transformedArr.push(arr[i + 1]);
                break;

            default:
                transformedArr.push(arr[i]);
        }
    }

    return transformedArr;
};