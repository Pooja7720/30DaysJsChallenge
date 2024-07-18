// TASK 1: WRITE A PROGRAM TO CHECK IF A NUMBER IS POSITIVE, NEGATIVE, OR ZERO, AND LOG THE RESULT TO THE CONSOLE.
let num = 66;
if(num > 0)
{
    console.log(num,"is a positive number");
}
else if(num < 0)
{
    console.log(num,"is a negative number");
}
else if(num == 0)
{
    console.log(num,"is a zero");
}
console.log("-----------------------------------------")

// TASK 2: WRITE A PROGRAM TO CHECK IF A PERSON IS ELIGIBLE TO VOTE (AGE >= 18) AND LOG THE RESULT TO THE CONSOLE.
let age = 12;
if(age >= 18)
{
    console.log("The person is eligible to vote");
}
else
{
    console.log("The person is not eligible to vote");
}

// OUTPUT
/*
node Activity1_IfElseStatements.js 
66 is a positive number
-----------------------------------------
The person is not eligible to vote
*/