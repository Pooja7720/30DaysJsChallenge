// EVEN OR ODD FUNCTION SCRIPT: WRITE A SCRIPT THAT INCLUDES A FUNCTION TO CHECK IF A NUMBER IS EVEN OR ODD AND LOGS THE RESULT.

const prompt = require('prompt-sync')();
function evenOdd(num)
{
    if(num%2==0)
    {
        console.log(`${num} is an even number.`)
    }
    else
    {
        console.log(`${num} is an odd number.`)
    }
}

let num = 0;
let choice = "yes";
let choiceVal = 0;
do {
    num = Number(prompt("Enter the number: "));
    evenOdd(num);
    choiceVal = Number(prompt("\nDo you want to continue?\n1.Yes\n2.No\n"));
    if(choiceVal == 1)
    {
        choice = "yes";
    }
    else if(choiceVal == 2)
    {
        choice = "no";
    }
} while (choice!='no');

// OUTPUT
/*
node FeatureRequest1.js               
Enter the number: 3
3 is an odd number.

Do you want to continue?
1.Yes
2.No

Do you want to continue?
1.Yes
2.No
1
Enter the number: 88
88 is an even number.

Do you want to continue?
1.Yes
2.No

Do you want to continue?
1.Yes
2.No
1
Enter the number: 45
45 is an odd number.

Do you want to continue?
1.Yes
2.No

Do you want to continue?
1.Yes
2.No
1
Enter the number: 90
90 is an even number.

Do you want to continue?
1.Yes
2.No

Do you want to continue?
1.Yes
2.No
2

*/