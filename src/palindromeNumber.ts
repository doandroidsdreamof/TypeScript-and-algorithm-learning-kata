//* based on https://leetcode.com/problems/palindrome-number/ //

var isPalindrome = function (palindrome: any) {
    let arr1 = [...palindrome.toString()].reverse();
    return (parseInt(arr1.join('')) - palindrome) === 0

};