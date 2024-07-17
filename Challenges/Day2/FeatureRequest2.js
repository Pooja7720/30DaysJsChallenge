// COMPARISON AND LOGICAL OPERATORS SCRIPT: CREATE A SCRIPT THAT COMPARES TWO NUMBERS USING DIFFERENT COMPARISON OPERATORS AND COMBINES CONDITIONS USING LOGICAL OPERATORS, LOGGING THE RESULT

let num1 = 20;
let num2 = 30;
// let val = 24;
let val = 50;

if((val>=num1 && val<30) || val==50)
{
    console.log("The value ",val," is in bewteen ",num1," and ",num2," or it's value is 50");
}

// OUTPUT FOR val = 24
/*
node FeatureRequest2.js 
The value  24  is in bewteen  20  and  30  or it's value is 50
*/

// OUTPUT FOR val = 50
/*
The value  50  is in bewteen  20  and  30  or it's value is 50
*/
