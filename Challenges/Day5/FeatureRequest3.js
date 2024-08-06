// CONCATINATION FUNCTION SCRIPT: WRITE A SCRIPT THAT INCLUDES A FUNCTION EXPRESSION TO CONCATENATE 2 STRINGS AND RETURNS THE RESULT.
const prompt = require('prompt-sync')();

const concat = (str1,str2)=>{
    return str1.concat(str2);
}

let firstName = prompt("Enter your name:");
let lastName = prompt("Enter your surname:");
console.log(`Welcome ${concat(firstName,lastName)}`)

// OUTPUT
/*

node FeatureRequest3.js
Enter your name:Pooja
Enter your surname:Pedgaonkar
Welcome PoojaPedgaonkar

*/