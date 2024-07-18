// TASK 3: WRITE A PROGRAM TO FIND THE LARGEST OF THREE NUMBERS USING NESTED IF-ELSE STATEMENTS.
let num1 = 12;
let num2 = 45;
let num3 = 30;


if(num1 > num2)
{
    if(num3 > num1)
    {
        console.log(num3,"is a largest number");
    }
    else
    {
        console.log(num1,"is a largest number");
    }
}
else
{
    if(num2 > num3)
    {
        console.log(num2,"is a largest number");
    }
    else
    {
        console.log(num3,"is a largest number");
    }
}

// OUTPUT
/*
node Activity2_NestedIfElseStatements.js 
45 is a largest number
*/