// based on codewars kata //
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript //



function count (string: any) {
    let hash: any = {};
    let arr: string[] = [...string]
    let value = 0;
    arr.forEach((currentValue, index) =>{
        if(hash[currentValue]  == hash[currentValue] ){
            hash[currentValue] += 1;
          }
           if(hash[currentValue] != hash[currentValue] ){
             hash[currentValue]  = 1
           }
    })

    return hash


}


console.log(count("aba")) //{'a': 2, 'b': 1}
console.log(count("aa"))
debugger


