//* Solution 1 //
var containsDuplicate = function (nums: number[]) {
    type hashType = {
        [key: string]: number;
    };
    let hash: hashType = {};
    let count = 0;
    let findDup = nums.forEach((current, index, arr) => {
        if (hash[current] == hash[current]) {
            hash[current] += 1;
        }
        if (hash[current] != hash[current]) {
            hash[current] = 1;
        }
    });

    let result = [...Object.keys(hash)];
    return result.length === nums.length ? false : true;
};

//* Solution 2 shortcut //
var containsDuplicateTwo = function (nums: any[]) {
    let elSet = new Set<number>(nums);
    return [...elSet].length == nums.length ? false : true;
};

console.log('false =>', containsDuplicateTwo([1, 2, 3, 4])); // false olmalı
console.log('true =>', containsDuplicateTwo([1, 2, 3, 1])); // true olmalı
console.log('true =>', containsDuplicateTwo([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true olmalı
console.log('true =>', containsDuplicateTwo([2, 14, 18, 22, 22])); //true
debugger;
