module.exports = (arr) => {
    let max = Math.floor(Math.max(arr[0], arr[1]))
    let min = Math.floor(Math.min(arr[0], arr[1]))
    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i
    }
    return sum;
};