
/* Kadane Algorithm */

var maxSubArray = function (nums: number[]) {
    const N: number = nums.length;
    let currentEl = nums[0];
    let maxEl = nums[0];

    for(let i = 1; i < N;i++){
    if(currentEl + nums[i] < nums[i]){
        currentEl = nums[i]
    }else{
        currentEl = currentEl + nums[i]
        maxEl = Math.max(currentEl,maxEl)
    }



    }
return maxEl


};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // => 6
console.log(maxSubArray([5, 4, -1, 7, 8])); // => 23
debugger;



