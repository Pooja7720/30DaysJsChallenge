// TWO-DIMENSIONAL ARRAY SCRIPT: CREATE A SCRIPT THAT DEMONSTRATES THE CREATION AND MANIPULATION OF TWO-DIMENSIONAL ARRAY.
const prompt = require('prompt-sync')();

let row = Number(prompt("Enter the total number of rows:"));
let column = Number(prompt("Enter the total number of columns:"));
let val = 0;
let arr = Array(row);
let choice = 0;
let methodChoice = 0;

// CREATING ARRAY
for(let i=0;i<row;i++)
{
    arr[i] = Array(column);
    for(let j=0;j<column;j++)
    {
        val = Number(prompt(`Enter the number at row ${i} and column ${j}: `));
        arr[i][j] = val;
    }
}

// USING ARRAY MANIPULATION METHODS
do
{
    methodChoice = Number(prompt("Choose a method to apply on array:\n1. Push\n2.Pop\n3.Shift\n4.Unshift\n"));
    switch(methodChoice)
    {
        case 1:
            // PUSH
            row = Number(prompt("Enter the row index to push the element:"));
            val = Number(prompt("Enter the number which you want to push:"));
            console.log("The array before pushing the number:",arr)
            arr[row].push(val);
            console.log("The array after pushing the number:",arr);
            console.log("\n*************************************\n")
            break;
        case 2:
            // POP
            row = Number(prompt("Enter the row index from which you want to pop the number:"));
            console.log("The array before popping the number:",arr)
            arr[row].pop();
            console.log("The array after popping the number:",arr);
            console.log("\n*************************************\n")
            break;
        case 3:
            // SHIFT
            row = Number(prompt("Enter the row index from which you want to shift the number:"));
            console.log("The array before shifting the number:",arr)
            arr[row].shift();
            console.log("The array after shifting the number:",arr);
            console.log("\n*************************************\n")
            break;
        case 4:
            // UNSHIFT
            row = Number(prompt("Enter the row index to unshift the element:"));
            val = Number(prompt("Enter the number which you want to unshift:"));
            console.log("The array before unshifting the number:",arr)
            arr[row].unshift(val);
            console.log("The array after unshifting the number:",arr);
            console.log("\n*************************************\n")
            break;
    }
    choice = Number(prompt("Do you want to continue?\n1. Yes\n2. No"));
    if(choice!==2 && choice!==1)
    {
        choice = 2;
    }
    console.log("\n-------------------------------------\n")
}while(choice!=2)

// OUTPUT
/*
node FeatureRequest4.js
Enter the total number of rows:2
Enter the total number of columns:3
Enter the number at row 0 and column 0: 1
Enter the number at row 0 and column 1: 2
Enter the number at row 0 and column 2: 3
Enter the number at row 1 and column 0: 4
Enter the number at row 1 and column 1: 5
Enter the number at row 1 and column 2: 6
Choose a method to apply on array:
1. Push
2.Pop
3.Shift
4.Unshift
Choose a method to apply on array:
1. Push
2.Pop
3.Shift
4.Unshift
1
Enter the row index to push the element:0
Enter the number which you want to push:7
The array before pushing the number: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
The array after pushing the number: [ [ 1, 2, 3, 7 ], [ 4, 5, 6 ] ]

*************************************

Do you want to continue?
1. Yes
Do you want to continue?
1. Yes
2. No1

-------------------------------------

Choose a method to apply on array:
1. Push
2.Pop
3.Shift
4.Unshift
Choose a method to apply on array:
1. Push
2.Pop
3.Shift
4.Unshift
2
Enter the row index from which you want to pop the number:1
The array before popping the number: [ [ 1, 2, 3, 7 ], [ 4, 5, 6 ] ]
The array after popping the number: [ [ 1, 2, 3, 7 ], [ 4, 5 ] ]

*************************************

Do you want to continue?
1. Yes
Do you want to continue?
1. Yes
2. No1

-------------------------------------

Choose a method to apply on array:
1. Push
2.Pop
3.Shift
4.Unshift
Choose a method to apply on array:
1. Push
2.Pop
3.Shift
4.Unshift
3
Enter the row index from which you want to shift the number:0
The array before shifting the number: [ [ 1, 2, 3, 7 ], [ 4, 5 ] ]
The array after shifting the number: [ [ 2, 3, 7 ], [ 4, 5 ] ]

*************************************

Do you want to continue?
1. Yes
Do you want to continue?
1. Yes
2. No1

-------------------------------------

Choose a method to apply on array:
1. Push
2.Pop
3.Shift
4.Unshift
Choose a method to apply on array:
1. Push
2.Pop
3.Shift
4.Unshift
4
Enter the row index to unshift the element:1
Enter the number which you want to unshift:45
The array before unshifting the number: [ [ 2, 3, 7 ], [ 4, 5 ] ]
The array after unshifting the number: [ [ 2, 3, 7 ], [ 45, 4, 5 ] ]

*************************************

Do you want to continue?
1. Yes
Do you want to continue?
1. Yes
2. No2

-------------------------------------

*/