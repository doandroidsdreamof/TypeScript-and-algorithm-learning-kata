function sumPrimes(primeNumber: number) {
  // In order to keep the last value inside the array perhaps that would be done in more better way //
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

