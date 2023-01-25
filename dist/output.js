"use strict";
function twoSum(numbers, target) {
    let hash = {};
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
var containsDuplicate = function (nums) {
    const result = nums.reduce((accumulator, current) => {
        if (accumulator === current) {
            return 0;
        }
        if (accumulator !== current) {
            return 1;
        }
    });
    return result === 1 ? true : false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
debugger;
function count(string) {
    let hash = {};
    let arr = [...string];
    let value = 0;
    arr.forEach((currentValue, index) => {
        if (hash[currentValue] == hash[currentValue]) {
            hash[currentValue] += 1;
        }
        if (hash[currentValue] != hash[currentValue]) {
            hash[currentValue] = 1;
        }
    });
    return hash;
}
console.log(count("aba"));
console.log(count("aa"));
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
function findOdd(A) {
    let hash = {};
    A.forEach((current) => {
        if (hash[current] == hash[current]) {
            hash[current] = hash[current] + 1;
        }
        if (hash[current] != hash[current]) {
            hash[current] = 1;
        }
    });
    for (let x in hash) {
        if (hash[x] % 2 === 0) {
            delete hash[x];
        }
    }
    let result = Object.keys(hash);
    return parseInt(result);
}
console.log(findOdd([1, 1, 2]));
debugger;
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
