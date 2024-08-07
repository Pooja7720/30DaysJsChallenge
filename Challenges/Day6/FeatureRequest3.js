// ARRAY ITERATION SCRIPT: WRITE A SCRIPT THAT ITERATES OVER AN ARRAY USING BOTH `for` LOOP AND `forEach` METHOD AND LOGS EACH ELEMENT.
const prompt = require('prompt-sync')();

let len = Number(prompt("Enter the total number of elements in an array:"));
let arr = [];
choice = 0;
let loop = 0;
for(let i=0; i<len; i++)
{
    let val = Number(prompt("Enter the number:"));
    arr[i] = val;
}

do {
    loop = Number(prompt("Which loop you want to choose?\n1. For loop\n2. Foreach loop"));
    switch(loop){
        case 1:
            // FOR LOOP
            console.log("Display using for loop...");
            for(let i=0; i< arr.length; i++)
            {
                console.log(arr[i]);
            }
            console.log("\n--------------------------------\n");
            break;
        case 2:
            // FOR EACH LOOP
            console.log("Display using for each loop...");
            arr.forEach((val)=>
            {
                console.log(val);
            });
            console.log("\n--------------------------------\n");
            break;
    }
    choice = Number(prompt("Do you want to continue?\n1.Yes\n2.No"));
} while (choice!=2);

// OUTPUT
/*
node FeatureRequest3.js 
Enter the total number of elements in an array:5
Enter the number:7
Enter the number:14
Enter the number:21
Enter the number:28
Enter the number:35
Which loop you want to choose?
1. For loop
Which loop you want to choose?
1. For loop
2. Foreach loop1
Display using for loop...
7
14
21
28
35

--------------------------------

Do you want to continue?
1.Yes
Do you want to continue?
1.Yes
2.No1
Which loop you want to choose?
1. For loop
Which loop you want to choose?
1. For loop
2. Foreach loop2
Display using for each loop...
7
14
21
28
35

--------------------------------

Do you want to continue?
1.Yes
Do you want to continue?
1.Yes
2.No2
*/
