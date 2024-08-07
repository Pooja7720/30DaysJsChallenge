const prompt = require('prompt-sync')();

// TASK 12: CREATE A TWO-DIMENSIONAL ARRAY (MATRIX) AND LOG THE ENTIRE ARRAY TO THE CONSOLE.

let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log("Displaying the array...")
for(let i=0; i< arr.length; i++)
{
    console.log(`Row ${i}`)
    for(j=0; j< arr[i].length; j++)
    {
        console.log(arr[i][j]);
    }
}
console.log("\n----------------------------------------\n");

// TASK 13: ACCESS AND LOG A SPECIFIC ELEMENT FROM THE TWO-DIMENSIONAL ARRAY.

let row = Number(prompt("Enter the row number:"));
let column = Number(prompt("Enter the column number:"));
console.log("The array element at given row and column number is:",arr[row][column])
console.log("\n----------------------------------------\n");

// OUTPUT
/*
node activity5_MultiDimensionalArray.js 
Displaying the array...
Row 0
1
2
3
Row 1
4
5
6
Row 2
7
8
9

----------------------------------------

Enter the row number:1
Enter the column number:2
The array element at given row and column number is: 6

----------------------------------------
*/