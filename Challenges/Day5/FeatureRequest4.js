// SUM CALCULATION ARROW FUNCTION SCRIPT: CREATE A SCRIPT THAT INCLUDES AN ARROW FUNCTION TO CALCULATE THE SUM OF TWO NUMBERS AND RETURNS THE RESULT.

const prompt = require('prompt-sync')();

const sum = (num1,num2) =>{
    return num1 + num2;
}

let val1 = Number(prompt("Enter the first number:"));
let val2 = Number(prompt("Enter the second number:"));
console.log(`The sum of ${val1} and ${val2} is: ${sum(val1,val2)}`);

// OUTPUT
/*

node FeatureRequest4.js 
Enter the first number:12
Enter the second number:14
The sum of 12 and 14 is: 26

*/