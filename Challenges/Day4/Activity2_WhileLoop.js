// TASK 3: WRITE A PROGRAM TO CALCULATE THE SUM OF NUMBERS FROM 1 TO 10 USING A WHILE LOOP.

let num = 1;
let sum=0;

while(num<=10)
{
    sum+=num;
    num++;
}
console.log("The sum of numbers from 1 to 10 is: ",sum);
console.log("----------------------------------");

// TASK 4: WRITE A PROGRAM TO PRINT NUMBERS FROM 10 TO 1 USING A WHILE LOOP.
let val = 10;
while(val!=0)
{
    console.log(val);
    val--;
}
console.log("----------------------------------");

// OUTPUT
/*
node Activity2_WhileLoop.js 
The sum of numbers from 1 to 10 is:  55
----------------------------------
10
9
8
7
6
5
4
3
2
1
----------------------------------

*/