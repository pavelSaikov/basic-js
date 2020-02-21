module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let maxDepth = 1;

        for(let i = 0; i < arr.length; i++) {
            let depth = 1;

            if(arr[i] instanceof Array) {
                depth += this.calculateDepth(arr[i]);
            }

            if(depth > maxDepth) maxDepth = depth;
        }

        return maxDepth;
    }
};