// TASK 4: CREATE VARIABLES OF DIFFERENT DATA TYPES (NUMBER, STRING, BOOLEAN, OBJECT, ARRAY) AND LOG EACH VARIABLE'S TYPE USING THE typeof OPERATOR.

var num = 942000;
let str = "The capital of India is Delhi";
let boolVal = false;
let date = new Date("2000-04-09");
let arr = [1,2,3,4,5];

console.log("Data type of num: ",typeof(num));
console.log("Data type of str: ",typeof(str));
console.log("Data type of boolVal: ",typeof(boolVal));
console.log("Data type of date: ",typeof(date));
console.log("Data type of arr: ",typeof(arr));

// OUTPUT
/*
$ node Activity3_DataTypes.js
Data type of num:  number
Data type of str:  string
Data type of boolVal:  boolean
Data type of date:  object
Data type of arr:  object
*/
