// TASK 6: TRY REASSIGNING A VARIABLE DECLARED WITH const AND OBSERVE THE ERROR.

const capital = "The capital of india is delhi";
console.log(capital);
capital = "I like to code";
console.log(capital);

// OUTPUT
/*
$ node Activity5_UnderstandingConst.js
The capital of india is delhi
C:\Users\hp\Desktop\JavaScript\JavaScript\Challenges\Day1\Activity5_UnderstandingConst.js:5
capital = "I like to code";
        ^

TypeError: Assignment to constant variable.
*/