// TASK 11: WRITE A PROGRAM THAT USES THE && OPERATOR TO COMBINE TWO CONDITIONS AND LOG THE RESULT TO THE CONSOLE.
let firstname = "Ryan";
let lastname = "Dahl";

if (firstname == "Ryan" && lastname == "Dahl")
{
    console.log("Yess! It's the founder of NodeJS");
}

// TASK 12: WRITE A PROGRAM THAT USES THE || OPERATOR TO COMBINE TWO CONDITIONS AND LOG THE RESULT TO THE CONSOLE.
let color = ["Red","Yellow","Orange","Green","Black","Blue","Purple"];
let RGB=[];
for(i=0; i<color.length; i++)
{
    if(color[i] == "Red" || color[i] == "Green" || color[i] == "Blue")
    {
        RGB.push(color[i]);
    }
}
console.log("RGB color array: ",RGB);

// TASK 13: WRITE A PROGRAM THAT USES ! OPERATOR TO NAVIGATE A CONDITION AND LOG THE RESULT TO THE CONSOLE.
let arr = [10,23,45,46,78,67,89,34,56,12,37,91];
let odd = [];

for(i=0; i<arr.length; i++)
{
    if(!(arr[i]%2 ==0))
    {
        odd.push(arr[i])
    }
}
console.log("THe odd number array is: ",odd);

// OUTPUT
/*
node Activity4_LogicalOperators.js 
Yess! It's the founder of NodeJS
RGB color array:  [ 'Red', 'Green', 'Blue' ]
THe odd number array is:  [ 23, 45, 67, 89, 37, 91 ]
*/