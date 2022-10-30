


//  Factorial Numbers Recursion //
  function factorialRecursion(n: number): any {
    if (n <= 1) {
      return 1;
    }
    return n * factorialRecursion(n - 1);
  }
  
  

  
  //  Factorial without Recursion for test //
   function factorialFunc(fac: number) {
    let arr: any[] = [];
    let n: number = fac + 1;
    if (fac <= 1) {
      return 1;
    } else {
      while (n > 1) {
        n--;
        arr.push(n);
      }
  
      return arr.reduce((acc, el) => (acc *= el));
    }
  }
  
