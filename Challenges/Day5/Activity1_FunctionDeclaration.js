// TASK 1: WRITE A FUNCTION TO CHECK IF A NUMBER IS EVEN OR ODD AND LOG THE RESULT TO THE CONSOLE.

function evenOdd(num) {
    if(num%2 == 0)
    {
        console.log(num,"is an even number!");
    }
    else
    {
        console.log(num,"is an odd number!");
    }
}

let num = 13;
evenOdd(num);
num = 24;
evenOdd(num);
console.log("----------------------------------");

// TASK 2: WRITE A FUNCTION TO CALCULATE THE SQUARE OF A NUMBER AND RETURN THE RESULT.

function square(num)
{
    return console.log("The sqaure of",num,"is: ",num**2);
}

let val = 4;
square(val);
val = 12;
square(val);
console.log("----------------------------------");

// OUTPUT
/*
node Activity1_FunctionDeclaration.js 
13 is an odd number!
24 is an even number!
----------------------------------
The sqaure of 4 is:  16
The sqaure of 12 is:  144
----------------------------------
*/