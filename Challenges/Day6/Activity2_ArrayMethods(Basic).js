// TASK 3: USE THE `push` METHOD TO ADD A NEW NUMBER TO THE END OF THE ARRAY AND LOG THE UPDATED ARRAY.
let arr = [1,2,3,4,5];
console.log(`Array before applying push method: ${arr}`);
arr.push(6);
console.log(`Array after applying push method: ${arr}`);
console.log("\n----------------------------------------\n");

// TASK 4: USE THE `pop` METHOD TO REMOVE THE LAST ELEMENT FROM THE ARRAY AND LOG THE UPDATED ARRAY.
console.log(`Array before applying pop method: ${arr}`);
arr.pop();
console.log(`Array after applying pop method: ${arr}`);
console.log("\n----------------------------------------\n");

// TASK 5: USE THE `shift` METHOD TO REMOVE THE FIRST ELEMENT FROM THE ARRAY AND LOG THE UPDATED ARRAY.
console.log(`Array before applying shift method: ${arr}`);
arr.shift();
console.log(`Array after applying shift method: ${arr}`);
console.log("\n----------------------------------------\n");

// TASK 6: USE THE `unshift` METHOD TO ADD A NEW NUMBER TO THE BEGINNING OF THE ARRAY AND LOG THE UPDATED ARRAY.
console.log(`Array before applying unshift method: ${arr}`);
arr.unshift(6);
console.log(`Array after applying unshift method: ${arr}`);
console.log("\n----------------------------------------\n");

// OUTPUT
/*
node Activity2_ArrayMethods\(Basic\).js 
Array before applying push method: 1,2,3,4,5
Array after applying push method: 1,2,3,4,5,6

----------------------------------------

Array before applying pop method: 1,2,3,4,5,6
Array after applying pop method: 1,2,3,4,5

----------------------------------------

Array before applying shift method: 1,2,3,4,5
Array after applying shift method: 2,3,4,5

----------------------------------------

Array before applying unshift method: 2,3,4,5
Array after applying unshift method: 6,2,3,4,5

----------------------------------------
*/