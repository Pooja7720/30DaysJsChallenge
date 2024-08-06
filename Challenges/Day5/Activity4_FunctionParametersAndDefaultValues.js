const prompt = require('prompt-sync')();

// TASK 7: WRITE A FUNCTION THAT TAKES 2 PARAMETERS AND RETURNS THEIR PRODUCT. PROVIDE A DEFAULT VALUE FOR THE SECOND PARAMETER.


const product = (r, pi = 3.14)=>{
    return pi*r*r;
}
let radius = Number(prompt("Enter the radius of circle to find out area:"));
let result = product(radius)
console.log(`The area of circle having radius ${radius} is ${result}`);
console.log("\n-------------------------------------------------------\n");

// TASK 8: WRITE A FUNCTION THAT TAKES A PERSON'S NAME AND AGE AND RETURNS A GREETING MESSAGE. PROVIDE A DEFAULT VALUE FOR THE AGE.

function greeting(name, age=24)
{
    return(console.log(`Hello ${name}!\nWe are glad to see you. Wish you a very happy birthday.\nNow finally you are ${age} years old.\nKeep growing and be successful in your life`));
}

let name = prompt("Enter your name:");
greeting(name);

// OUTPUT
/*

node Activity4_FunctionParametersAndDefaultValues.js
Enter the radius of circle to find out area:4
The area of circle having radius 4 is 50.24

-------------------------------------------------------

Enter your name:Pooja
Hello Pooja!
We are glad to see you. Wish you a very happy birthday.
Now finally you are 24 years old.
Keep growing and be successful in your life

*/