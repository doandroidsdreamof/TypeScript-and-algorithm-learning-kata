"use strict";
const test = (t) => console.log(t);
function sumAll(arr) {
    let sum = 0;
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);
    let parseData = [maxValue];
    while (maxValue > minValue) {
        --maxValue;
        parseData.push(maxValue);
    }
    return parseData.reduce((acc, el) => acc + el);
}
test(sumAll([5, 10]));
