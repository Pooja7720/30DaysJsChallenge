// npm install prompt-sync (INSTALL BEFORE USING IT)
const prompt = require('prompt-sync')();

// TASK 5: WRITE AN ARROW FUNCTION TO CALCULATE THE SUM OF TWO NUMBERS AND RETURN THE RESULT.

let sum = (val1,val2) =>{
    return console.log(`The sum of ${val1} and ${val2} is ${val1 + val2}`);
}

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
num1 = Number(num1);
num2 = Number(num2);

sum(num1,num2);
console.log("\n-------------------------------------------------------\n");

// TASK 6: WRITE AN ARROW FUNCTION TO CHECK IF A STRING CONTAINS A SPECIFIC CHARACTER AND RETURN A BOOLEAN VALUE.

let checkChar = (str, userChar) =>{
    for(let char of str)
    {
        if(char === userChar)
        {
            return 1;
        }
    }
    return 0;
}

let str = prompt("Enter the string:");
let userChar = prompt("Enter the character:");

let choice = "yes";
let userChoice = "";

do{
    let boolVal = checkChar(str, userChar);
    
    if(boolVal)
    {
        console.log("The character is present so function returned",boolVal)
        break;
    }
    else{
        console.log("The character is not present so function returned",boolVal)

        userChoice = prompt("Enter your choice:\n1.Yes\n2.No\n");
        if(userChoice === "")
        {
            console.log("Invalid input. Please enter 1 or 2.");
        }
        else
        {
            userChoice = Number(userChoice);
            switch (userChoice) {
                case 1:
                    userChar = prompt("Enter the character:");
                    break;
                case 2:
                    choice = "no";
                    break;
            
            }
        }
        
    }
    
}while(choice !== "no")

// OUTPUT
/*

node Activity3_ArrowFunctions.js
Enter the first number:12
Enter the second number:13
The sum of 12 and 13 is 25

-------------------------------------------------------

Enter the string:hello
Enter the character:q
The character is not present so function returned 0
Enter your choice:
1.Yes
2.No

Invalid input. Please enter 1 or 2.
The character is not present so function returned 0
Enter your choice:
1.Yes
2.No
Enter your choice:
1.Yes
2.No
1
Enter the character:w
The character is not present so function returned 0
Enter your choice:
1.Yes
2.No
Enter your choice:
1.Yes
2.No
1
Enter the character:e
The character is present so function returned 1

*/