// ARITHMETIC OPERATIONS SCRIPT: WRITE A SCRIPT THAT PERFORMS BASIC ARITHMETIC OPERATIONS (ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION, REMAINDER) ON TWO NUMBERS AND LOGS THE RESULTS.

let num1 = 12;
let num2 = 6;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2;

console.table([["Addition",addition], ["Subtraction",subtraction], ["Multiplication",multiplication], ["Division",division], ["Remainder",remainder]]);

// OUTPUT
/*
node FeatureRequest1.js
┌─────────┬──────────────────┬────┐
│ (index) │ 0                │ 1  │
├─────────┼──────────────────┼────┤
│ 0       │ 'Addition'       │ 18 │
│ 1       │ 'Subtraction'    │ 6  │
│ 2       │ 'Multiplication' │ 72 │
│ 3       │ 'Division'       │ 2  │
│ 4       │ 'Remainder'      │ 0  │
└─────────┴──────────────────┴────┘
*/