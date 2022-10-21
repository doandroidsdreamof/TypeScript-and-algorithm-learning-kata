const check = (t:any) => console.log(t)

// Sum All Numbers in a Range //
 function sumAll(arr: number[]) {
  let maxValue: number  = Math.max(...arr)
  let minValue: number  = Math.min(...arr)
  let parseData : number[] = [maxValue];
  while(maxValue > minValue){
    --maxValue
    parseData.push(maxValue)
  }

  return parseData.reduce((acc,el) => acc + el)
  }
  


// Spinal Tap Case //

  function spinalCase(str: string) {
    let upperCase: RegExp = /[A-Z]/g; 
    let regexpUnderScore: RegExp = /[_-]+/g;
    let regexpSpace: RegExp  = /\s/g;
       if (
       !str.match(regexpSpace) 
       || str.match(regexpSpace) 
       || str.match(regexpUnderScore)){
       str = str.replace(upperCase, ' $&').trim().replace(regexpSpace,'-')
      }
      
      return str.replace(regexpUnderScore,'-').toLowerCase()

 
  }      

  


check(spinalCase('This Is Spinal Tap')) //this-is-spinal-tap
check(spinalCase('thisIsSpinalTap')) //this-is-spinal-tap
check(spinalCase('The_Andy_Griffith_Show')) //the-andy-griffith-show
check(spinalCase('Teletubbies say Eh-oh')) // teletubbies-say-eh-oh
check(spinalCase('AllThe-small Things')) // all-the-small-things
