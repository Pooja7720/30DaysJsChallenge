// SQUARE CALCULATION FUNCTION SCRIPT: CREATE A SCRIPT THAT INCLUDES A FUNCTION TO CALCULATE THE SQUARE OF A NUMBER AND RETURNS A RESULT.
const prompt = require('prompt-sync')();

function square(num){
    return num**2;
}

let val = Number(prompt("Enter the number to calculate the square:"));
console.log(`The square of ${val} is ${square(val)}`);

// OUTPUT
/*
node FeatureRequest2.js
Enter the number to calculate the square:12
The square of 12 is 144
*/