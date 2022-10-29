var now = require("performance-now");

// Sum All Numbers in a Range //
function sumAll(arr: number[]) {
  let sum: number = 0;
  let maxValue: number = Math.max(...arr);
  let minValue: number = Math.min(...arr);
  let parseData: number[] = [maxValue];
  while (maxValue > minValue) {
    --maxValue;
    parseData.push(maxValue);
  }

  return parseData.reduce((acc, el) => acc + el);
}

// Spinal Tap Case //
function spinalCase(str: string) {
  let upperCase: RegExp = /[A-Z]/g; // for readability
  let regexpUnderScore: RegExp = /[_-]+/g;
  let regexpSpace: RegExp = /\s/g;
  if (!str.match(regexpSpace) || str.match(regexpSpace) || str.match(regexpUnderScore)) {
    str = str.replace(upperCase, " $&").trim().replace(regexpSpace, "-");
  }

  return str.replace(regexpUnderScore, "-").toLowerCase();
}

// Sum All Odd Fibonacci Numbers //
// Formula f(n - 1) + f(n + 1 ) //
function sumFibs(num: number) {
  let fibonacci: number[] = [];
  let tekSayılarınToplamı = 0;
  let ilkDeğer = 0;
  let ikinciDeğer = 1;
  let n: number = num;
  while (num >= 0) {
    num--;
    fibonacci.push(ikinciDeğer);
    ikinciDeğer;
    ikinciDeğer = ilkDeğer + ikinciDeğer;
    ilkDeğer = ikinciDeğer - ilkDeğer;
  }

  let tekSayılar: number[] = fibonacci.filter((el) => el % 2 === 1);
  let result = tekSayılar.filter((el: number, i) => el <= n);
  return result.reduce((acc: number, el) => acc + el);
}

// algorithm speed test //
let start = now();
console.time("test");
sumFibs(75024);
let end = now();
console.timeEnd("test");
console.log((end - start).toFixed(3));
