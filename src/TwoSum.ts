// Two Sum //
// based on code wars question //
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript //

function twoSum(numbers: any[], target: number) {
    let findIndexValue: number[] = [];
    let parse: any[] = [];
    let sumAll = numbers.reduce((total, currentValue) => (total += currentValue));
    let findValue: any[] = [];
    for (let i = 0; i < numbers.length; i++) {
        findIndexValue.push(numbers[i]);
        if (sumAll - numbers[i] === target) {
            findValue.push(numbers[i]);
        }
    }
    let remove = [findValue[0]];
    let indexValue = findIndexValue.filter(
        (element, index) => !remove.includes(element)
    );



}







console.log(twoSum([1, 2, 3], 4)); // [0,2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1,2]
console.log(twoSum([2, 2, 3], 4)); // [0,1]
debugger;

