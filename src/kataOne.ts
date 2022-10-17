const test = (t:any) => console.log(t)
// Sum All Numbers in a Range
function sumAll(arr: number[]) {
  let sum : number = 0;
  let maxValue: number  = Math.max(...arr)
  let minValue: number  = Math.min(...arr)
  let parseData : number[] = [maxValue];
  while(maxValue > minValue){
    --maxValue
    parseData.push(maxValue)
  }

  return parseData.reduce((acc,el) => acc + el)


  }
  
  test(sumAll([5, 10]))
