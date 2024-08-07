// TASK 7: USE THE `map` METHOD TO CREATE A NEW ARRAY WHERE EACH NUMBER IS DOUBLED AND LOG THE NEW ARRAY.

let arr = [1,2,3,4,5,6,7,8,9,10];
let doubledArr = arr.map((val)=>{
    return val*2;
})
console.log(`The array is: ${arr}`);
console.log(`The array after doubling it: ${doubledArr}`);
console.log("\n----------------------------------------\n");

//  TASK 8: USE THE `filter` METHOD TO CREATE A NEW ARRAY WITH ONLY EVEN NUMBERS AND LOG THE NEW ARRAY.

let filteredArr = arr.filter((val)=>{
    return val%2==0
})
console.log(`The array is: ${arr}`);
console.log(`The array after filtering it: ${filteredArr}`);
console.log("\n----------------------------------------\n");

// TASK 9: USE THE `reduce` METHOD TO CALCULATE THE SUM OF ALL NUMBERS IN THE ARRAY AND LOG THE RESULT.

let sum = arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(`The array is: ${arr}`);
console.log(`The sum of numbers in array is: ${sum}`);
console.log("\n----------------------------------------\n");

// OUTPUT
/*
node Activity3_ArrayMethods\(Intermediate\).js 
The array is: 1,2,3,4,5,6,7,8,9,10
The array after doubling it: 2,4,6,8,10,12,14,16,18,20

----------------------------------------

The array is: 1,2,3,4,5,6,7,8,9,10
The array after filtering it: 2,4,6,8,10

----------------------------------------

The array is: 1,2,3,4,5,6,7,8,9,10
The sum of numbers in array is: 55

----------------------------------------
*/