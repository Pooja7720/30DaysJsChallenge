// TASK 8: WRITE A PROGRAM TO COMPARE TWO NUMBERS USING < AND > AND LOG THE RESULT TO THE CONSOLE.
let num1 = 50;
let num2 = 28;
console.log("Boolean Status of num1 < num2 : ",num1<num2);
console.log("Boolean Status of num1 > num2 : ",num1>num2);

if(num1<num2)
{
    console.log("num1 is less than num2");
}
else
{
    console.log("num1 is greater than num2");
}

let num3 = 30;
let num4 = 68;
console.log("Boolean Status of num3 < num4 : ",num3<num4);
console.log("Boolean Status of num3 > num4 : ",num3>num4);

if(num3<num4)
{
    console.log("num3 is less than num4");
}
else
{
    console.log("num3 is greater than num4");
}

console.log("------------------------------------------")

// TASK 9: WRITE A PROGRAM TO COMPARE TWO NUMBERS USING <= AND >= AND LOG THE RESULT TO THE CONSOLE.
let arr = [34,56,48,20,90,12];
let num5 = 48;
let lessOrEqual = [];
let greaterOrEqual = [];
for(num = 0; num<arr.length; num++)
{
    if(arr[num] <= num5)
    {
        lessOrEqual.push(arr[num]);
    }
    if(arr[num] >= num5)
    {
        greaterOrEqual.push(arr[num]);
    }
}
console.log("The numbers less than or equal to 48 are: ",lessOrEqual);
console.log("The numbers greater than or equal to 48 are: ",greaterOrEqual);

console.log("------------------------------------------")

// TASK 10: WRITE A PROGRAM TO COMPARE TWO NUMBERS USING == AND === AND LOG THE RESULT TO THE CONSOLE.
let num6 = 45;
let num7 = 45.34;
let num8 = 45.34;
num9 = "45";

if(num6 == num9)
{
    console.log("Both num6 and num9 are equal but data type may be different")
}
if(num7 === num8)
{
    console.log("Both num7 and num8 are equal and data types are also equal")
}
console.log("------------------------------------------")

// OUTPUT
/*
node Activity3_ComparisonOperators.js 
Boolean Status of num1 < num2 :  false
Boolean Status of num1 > num2 :  true
num1 is greater than num2
Boolean Status of num3 < num4 :  true
Boolean Status of num3 > num4 :  false
num3 is less than num4
------------------------------------------
The numbers less than or equal to 48 are:  [ 34, 48, 20, 12 ]
The numbers greater than or equal to 48 are:  [ 56, 48, 90 ]
------------------------------------------
Both num6 and num9 are equal but data type may be different
Both num7 and num8 are equal and data types are also equal
------------------------------------------

*/