// TASK 10: USE THE `for` LOOP TO ITERATE OVER THE ARRAY AND LOG EACH ELEMENT TO THE CONSOLE.

let arr = [12,24,36,48,60];
console.log("For loop...")
for(let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}
console.log("\n----------------------------------------\n");

// TASK 11: USE THE `forEach` METHOD TO ITERATE OVER THE ARRAY AND LOG EACH ELEMENT TO THE CONSOLE.
console.log("Foreach loop...")
arr.forEach(element => {
    console.log(element);
});
console.log("\n----------------------------------------\n");

// OUTPUT
/*
node Activity4_ArrayIteration.js 
For loop...
12
24
36
48
60

----------------------------------------

Foreach loop...
12
24
36
48
60

----------------------------------------

*/