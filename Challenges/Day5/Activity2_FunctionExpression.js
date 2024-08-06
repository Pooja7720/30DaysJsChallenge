// TASK 3: WRITE A FUNCTION EXPRESSION TO FIND THE MAXIMUM OF TWO NUMBERS AND LOG THE RESULT TO THE CONSOLE.

const max = function(num1,num2){
    if(num1>num2)
    {
        return console.log(num1,"is greater than",num2);
    }
    else if(num1<num2)
    {
        return console.log(num2,"is greater than",num1);
    }
    else
    {
        return console.log("Both numbers are equal!");
    }
}

let num1 = 14;
let num2 = 44;
max(num1,num2);
console.log("----------------------------------");

num1 = 38;
num2 = 25;
max(num1,num2);
console.log("----------------------------------");

num1 = 45;
num2 = 45;
max(num1,num2);
console.log("----------------------------------");

// TASK 4: WRITE A FUNCTION EXPRESSION TO CONCATENATE TWO STRINGS AND RETURN THE RESULT.
const concat = function concatinate(str1,str2)
{
    return console.log("Concatinated string is: ",str1+str2);
}
let str1 = "CODING";
let str2 = "IS LIFE";
concat(str1,str2)
console.log("----------------------------------");

// NOTES
/*
In JavaScript, a function expression is a way to define a function within an expression instead of as a separate statement. It allows you to create a function that can be stored in a variable, passed as an argument to another function, or immediately invoked. Function expressions can be named or anonymous.
You must have to call the function after it's defined. We can not call it before assigning it funtion.
*/

// OUTPUT
/*
node Activity2_FunctionExpression.js 
44 is greater than 14
----------------------------------
38 is greater than 25
----------------------------------
Both numbers are equal!
----------------------------------
Concatinated string is:  CODINGIS LIFE
----------------------------------
*/