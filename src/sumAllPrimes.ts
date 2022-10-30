// Sum all prime numbers //
// 6n + 1 //
function sumPrimes(primeNumber: number) {
  let arr: any[] = [primeNumber];
  while (primeNumber > 0) {
    primeNumber--;
    arr.push(primeNumber);
  }
  const result: number[] = arr.filter((num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  });
  return result.reduce((acc, el) => acc + el);

  //.reduce((acc,el) => acc + el)
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156
debugger;
