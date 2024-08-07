// ARRAY TRANSFORMATION SCRIPT: CREATE A SCRIPT THAT USES `map`, `filter`, AND `reduce` METHODS TO TRANSFORM AND AGGREGATE ARRAY DATA.

const prompt = require('prompt-sync')();
choice = "yes";
let userChoice = 0;
let arr = [];
let len = 0;
let val = 0;
let newArr = [];
len = Number(prompt("Enter the element count:"));
    for(let i = 0; i< len; i++)
    {
        val = Number(prompt("Enter the element:"));
        arr[i] = val
    }
do
{
    
    userChoice = Number(prompt("Enter your choice:\n1. Map(Doubling)\n2. Filter(Even number)\n3. Reduce(Largest number)\n"))
    switch(userChoice)
    {
        case 1: 
            // MAP
            console.log("Given array:",arr);
            newArr = arr.map((val)=>{
                return val*2;
            })
            console.log("The array after doubling:",newArr);
            console.log("\n--------------------------------\n");
            break;
        case 2:
            // FILTER
            console.log("Given array:",arr);
            newArr = arr.filter((val)=>{
                return val%2==0;
            });
            console.log("The array after filtering even numbers:",newArr);
            console.log("\n--------------------------------\n");
            break;
        case 3:
            // REDUCE
            console.log("Given array:",arr);
            newArr = arr.reduce((res,cur)=>{
                return res>cur ? res : cur;
            });
            console.log("The largest number in array is:",newArr);
            console.log("\n--------------------------------\n");
            break;
    }
    choice = Number(prompt("\nDo you want to continue?\n1.Yes\n2.No"));
    if(choice == 1)
    {
        choice = "yes";
    }
    else
    {
        choice = "no";
    }
}while(choice!="no");

// OUTPUT
/*
node FeatureRequest2.js 
Enter the element count:5
Enter the element:1
Enter the element:2
Enter the element:3
Enter the element:4
Enter the element:5
Enter your choice:
1. Map(Doubling)
2. Filter(Even number)
3. Reduce(Largest number)
Enter your choice:
1. Map(Doubling)
2. Filter(Even number)
3. Reduce(Largest number)
1
Given array: [ 1, 2, 3, 4, 5 ]
The array after doubling: [ 2, 4, 6, 8, 10 ]

--------------------------------


Do you want to continue?
1.Yes

Do you want to continue?
1.Yes
2.No1
Enter your choice:
1. Map(Doubling)
2. Filter(Even number)
3. Reduce(Largest number)
Enter your choice:
1. Map(Doubling)
2. Filter(Even number)
3. Reduce(Largest number)
2
Given array: [ 1, 2, 3, 4, 5 ]
The array after filtering even numbers: [ 2, 4 ]

--------------------------------


Do you want to continue?
1.Yes

Do you want to continue?
1.Yes
2.No1
Enter your choice:
1. Map(Doubling)
2. Filter(Even number)
3. Reduce(Largest number)
Enter your choice:
1. Map(Doubling)
2. Filter(Even number)
3. Reduce(Largest number)
3
Given array: [ 1, 2, 3, 4, 5 ]
The largest number in array is: 5

--------------------------------


Do you want to continue?
1.Yes

Do you want to continue?
1.Yes
2.No2

*/