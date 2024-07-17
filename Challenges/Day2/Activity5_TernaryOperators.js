// TASK 14: WRITE A PROGRAM THAT USES TERNARY OPERATOR TO CHECK IF A NUMBER IS POSITIVE OR NEGATIVE AND LOG THE RESULT TO THE CONSOLE.

let arr = [10,-23,45,-46,78,-67,89,-34,56,-12,37,91];
let positive = [];
let negative = [];
arr.map(num => num > 0 ? positive.push(num) : negative.push(num));
console.log("Array with positive numbers: ",positive);
console.log("Array with negative numbers: ",negative);

// OUTPUT
/*
node Activity5_TernaryOperators.js 
Array with positive numbers:  [
  10, 45, 78, 89,
  56, 37, 91
]
Array with negative numbers:  [ -23, -46, -67, -34, -12 ]

*/