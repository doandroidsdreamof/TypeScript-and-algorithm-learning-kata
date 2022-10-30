"use strict";
define("factorial", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.factorialFunc = void 0;
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
    exports.factorialFunc = factorialFunc;
});
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