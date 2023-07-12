/*

Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

*/

let isOdd = (x) => (x % 2 != 0) ? true : false;

let result = isOdd(3);

console.log(result);
