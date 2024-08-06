// HIGHER-ORDER FUNCTION SCRIPT: WRITE A SCRIPT THAT INCLUDES A HIGHER-ORDER FUNCTION TO APPLY A GIVEN FUNCTION MULTIPLE TIMES.
const prompt = require('prompt-sync')();

const mult = (val1,val2) =>{
    return val1 * val2;
}

function table(func,num)
{
    for(let i=0; i<10; i++)
    {
        console.log(`${num} * ${i+1} = ${func(num,i+1)}`);
    }
}

let num = Number(prompt("Enter the number:"));
table(mult,num);

// OUTPUT
/*
node FeatureRequest5.js 
Enter the number:5
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/