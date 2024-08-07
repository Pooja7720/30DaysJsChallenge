// ARRAY MANIPULATION SCRIPT: WRITE A SCRIPT THAT DEMONSTRATES THE CREATION OF AN ARRAY, ADDING AND REMOVING ELEMENTS USING `push`, `pop`, `shift`, AND `unshift` METHODS.
const prompt = require('prompt-sync')();

let arr = [1,2,3,4,5,6];
let choice = 0;
let userChoiceMethod = 0;
let num = 0;
console.log(`The array is: ${arr}`);
do{
    userChoiceMethod = Number(prompt("Choose the method to perform operation:\n1. Push\n2. Pop\n3. Shift\n4. Unshift\n"));
    switch(userChoiceMethod)
    {
        case 1:
            console.log("Given array:",arr);
            num = Number(prompt("Enter the number to push in array:"));
            arr.push(num)
            console.log(`Array after pushing ${num}: ${arr}`);
            console.log("****************************");
            break;
        case 2:
            console.log("Given array:",arr);
            arr.pop()
            console.log(`Array after popping last element: ${arr}`);
            console.log("****************************");
            break;
        case 3:
            console.log("Given array:",arr);
            arr.shift()
            console.log(`Array after shifting first element: ${arr}`);
            console.log("****************************");
            break;
        case 4:
            console.log("Given array:",arr);
            num = Number(prompt("Enter the number to insert in array at the start:"));
            arr.unshift(num)
            console.log(`Array after unshifting ${num}: ${arr}`);
            console.log("****************************");
            break;
    }
    choice = Number(prompt("Do you want to continue?\n1.Yes\n2.No\n"));
    if(choice == 1)
    {
        choice = "yes";
    }
    else
    {
        choice = "no";
    }
}while(choice!="no");

console.log("\n----------------------------------------\n");

// OUTPUT
/*
node FeatureRequest1.js 
The array is: 1,2,3,4,5,6
Choose the method to perform operation:
1. Push
2. Pop
3. Shift
4. Unshift
Choose the method to perform operation:
1. Push
2. Pop
3. Shift
4. Unshift
1
Given array: [ 1, 2, 3, 4, 5, 6 ]
Enter the number to push in array:8
Array after pushing 8: 1,2,3,4,5,6,8
****************************
Do you want to continue?
1.Yes
2.No
Do you want to continue?
1.Yes
2.No
1
Choose the method to perform operation:
1. Push
2. Pop
3. Shift
4. Unshift
Choose the method to perform operation:
1. Push
2. Pop
3. Shift
4. Unshift
2
Given array: [
  1, 2, 3, 4,
  5, 6, 8
]
Array after popping last element: 1,2,3,4,5,6
****************************
Do you want to continue?
1.Yes
2.No
Do you want to continue?
1.Yes
2.No
1
Choose the method to perform operation:
1. Push
2. Pop
3. Shift
4. Unshift
Choose the method to perform operation:
1. Push
2. Pop
3. Shift
4. Unshift
3
Given array: [ 1, 2, 3, 4, 5, 6 ]
Array after shifting first element: 2,3,4,5,6
****************************
Do you want to continue?
1.Yes
2.No
Do you want to continue?
1.Yes
2.No
1
Choose the method to perform operation:
1. Push
2. Pop
3. Shift
4. Unshift
Choose the method to perform operation:
1. Push
2. Pop
3. Shift
4. Unshift
4
Given array: [ 2, 3, 4, 5, 6 ]
Enter the number to insert in array at the start:45
Array after unshifting 45: 45,2,3,4,5,6
****************************
Do you want to continue?
1.Yes
2.No
Do you want to continue?
1.Yes
2.No
2

----------------------------------------

*/