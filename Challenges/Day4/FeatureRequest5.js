// FACTORIAL CALCULATION SCRIPT: CREATE A SCRIPT THAT CALCULATES THE FACTORIAL OF A NUMBER USING A DO...WHILE LOOP.

let val = 4;
let fact = 1;
let count = val;
do {

    fact = fact * count;
    count--;
} while (count!=1);
console.log("The factorial of",val,"is: ",fact);
console.log("----------------------------------");

// OUTPUT
/*
node FeatureRequest5.js 
The factorial of 4 is:  24
----------------------------------
*/