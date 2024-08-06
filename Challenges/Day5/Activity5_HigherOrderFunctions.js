const prompt = require('prompt-sync')();

// TASK 9: WRITE A HIGHER ORDER FUNCTION THAT TAKES A FUNCTION AND A NUMBER, AND CALLS THE FUNCTION THAT MANY TIMES.

function mult(val1,val2){
    return console.log(`${val1} * ${val2} = ${val1 * val2}`);
}

function table(func, count, num)
{
    for(let i=0; i<count; i++)
    {
        func(num, i+1);
    }
}

let num = Number(prompt("Enter the number to calculate it's table:"));
let count = Number(prompt("Enter till which number you want to calculate:"));
table(mult, count, num)
console.log("\n-------------------------------------------------------\n");

// TASK 10: WRITE A HIGHER ORDER FUNCTION THAT TAKES TWO FUNCTIONS AND A VALUE, APPLIES THE FIRST FUNCTION TO THE VALUE, AND THEN APPLIES THE SECOND FUNCTION TO THE RESULT

function double(num)
{
    return num*2;
}

function add5(num)
{
    return num+5;
}

function finalFunc(func1,func2,num)
{
    let val1 = 0;
    let val2 = 0;
    val1 = func1(num);
    console.log(`The value after doubling ${num}: ${val1}`);
    val2 = func2(val1);
    console.log(`The value after adding 5 in ${val1}: ${val2}`)
}
let val = Number(prompt("Enter a number:"));
finalFunc(double,add5,val);

// OUTPUT
/*
node Activity5_HigherOrderFunctions.js
Enter the number to calculate it's table:5
Enter till which number you want to calculate:6
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30

-------------------------------------------------------

Enter a number:5
The value after doubling 5: 10
The value after adding 5 in 10: 15

*/