module.exports = function transform(arr) {
    if(!(arr instanceof Array)) throw new Error();

    for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) == 'string') {
            switch (arr[i]) {
                case '--discard-next':
                    if(i + 1 != arr.length)
                        arr.splice(i + 1, 1);

                    arr.splice(i, 1);
                    i--;

                    break;
                
                case '--discard-prev':
                    if(i != 0) {
                        arr.splice(i, 1);
                        arr.splice(i - 1, 1);
                        i -= 2;
                    } else {
                        arr.splice(i, 1);
                        i--;
                    }

                    break;

                case '--double-next':
                    if(i + 1 != arr.length) {
                        arr[i] = arr[i + 1];
                        //i++;
                    } else {
                        arr.splice(i, 1);
                    }

                    break;

                case '--double-prev':
                    if(i != 0) {
                        arr[i] = arr[i - 1];
                    } else {
                        arr.splice(i, 1);
                        i--;
                    }

                    break;
            }
        }
    }

    return arr;
};
