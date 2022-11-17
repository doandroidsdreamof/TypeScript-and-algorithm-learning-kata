"use strict";
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; i < numbers.length; j++) {
            if ((numbers[i] + numbers[j]) === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([
    -102, -809, 798, 590, -274, -505, 168, 578, 129, -73, -435, -132,
    -300, -999, 226, -576, 642, 80, -34, -597, 440, 682, 56, 501, -804,
    -625, -758, 474, -17, -551, 729, -630, -310, 781, 298, 948, 197,
    175, -620, 361, -232, 392, -377, 24, -580, 155, -893, 256, 867, 599,
    -692, 635, -873, -438, -398, -409, 471, -124, -120, 218, 159, -259,
    20, 212, -827,
], 453));
debugger;
function diffArray(arr1, arr2) {
    const newArr = [...arr1, ...arr2];
    return newArr.filter((el, i) => !arr2.includes(el) || !arr1.includes(el));
}
function factorialRecursion(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorialRecursion(n - 1);
}
function factorialFunc(fac) {
    let arr = [];
    let n = fac + 1;
    if (fac <= 1) {
        return 1;
    }
    else {
        while (n > 1) {
            n--;
            arr.push(n);
        }
        return arr.reduce((acc, el) => (acc *= el));
    }
}
function sumFibs(num) {
    let fibonacci = [];
    let ilkDeğer = 0;
    let ikinciDeğer = 1;
    let n = num;
    while (num >= 0) {
        num--;
        fibonacci.push(ikinciDeğer);
        ikinciDeğer;
        ikinciDeğer = ilkDeğer + ikinciDeğer;
        ilkDeğer = ikinciDeğer - ilkDeğer;
    }
    let tekSayılar = fibonacci.filter((el) => el % 2 === 1);
    let result = tekSayılar.filter((el, i) => el <= n);
    return result.reduce((acc, el) => acc + el);
}
var isPalindrome = function (palindrome) {
    let arr1 = [...palindrome.toString()].reverse();
    return (parseInt(arr1.join('')) - palindrome) === 0;
};
function spinalCase(str) {
    let upperCase = /[A-Z]/g;
    let regexpUnderScore = /[_-]+/g;
    let regexpSpace = /\s/g;
    if (!str.match(regexpSpace) || str.match(regexpSpace) || str.match(regexpUnderScore)) {
        str = str.replace(upperCase, " $&").trim().replace(regexpSpace, "-");
    }
    return str.replace(regexpUnderScore, "-").toLowerCase();
}
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
function sumPrimes(primeNumber) {
    let arr = [primeNumber];
    while (primeNumber > 0) {
        primeNumber--;
        arr.push(primeNumber);
    }
    const result = arr.filter((num) => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num !== 1;
    });
    return result.reduce((acc, el) => acc + el);
}
function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let diff = [...str.trim().replace(/\s+/g, '')];
    let value = [];
    let count = 0;
    for (let i = 0; i < vowels.length; i++) {
        value.push(...diff.filter((el, index) => el.includes(vowels[i])));
    }
    return value.length;
}
