// Two Sum //
// based on code wars question //
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript //

function twoSum(numbers: any[], target: number) {
    let hash: any = {};
    numbers.forEach((key, value) => {
        hash[key] = value;
    });
    for (let i = 0; i < numbers.length; i++) {
        const secondValue = target - numbers[i];
        if (hash[secondValue] !== undefined && hash[secondValue] !== i) {
            return [i, hash[secondValue]];
        }
    }
}
