// VOTING ELIGIBILITY SCRIPT: CREATE A SCRIPT TO CHECK IF A PERSON IS ELIGIBLE TO VOTE BASED ON THEIR AGE AND LOG THE RESULT.

let arr = [["John",34],["Alina",23],["Rishi",14],["Alia",12],["Rishita",18]];
for(i=0;i<arr.length;i++)
{
    if(arr[i][1] >=18)
    {
        console.log(arr[i][0],"is eligible to vote!");
    }
    else
    {
        console.log(arr[i][0],"is under 18 and eligible to vote!");
    }
}

// OUTPUT
/*
node FeatureRequest2.js 
John is eligible to vote!
Alina is eligible to vote!
Rishi is under 18 and eligible to vote!
Alia is under 18 and eligible to vote!
Rishita is eligible to vote!
*/