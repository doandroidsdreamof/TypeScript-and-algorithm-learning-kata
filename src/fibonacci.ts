
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

