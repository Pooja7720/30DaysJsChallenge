// GRADE ASSIGNMENT SCRIPT: CREATE A SCRIPT THAT USES SWITCH CASE TO ASSIGN A GRADE BASED ON A SCORE AND LOGS THE GRADE.

let marks = [34, 56, 72, 80, 92, 25, 98, 35, 40,10];
let count = 0;
do {
    switch (true) {
        case marks[count]<=20:
            console.log(marks[count],": GRADE F");
            break;
        case marks[count]<=35:
            console.log(marks[count],": GRADE D");
            break;
        case marks[count]<=65:
            console.log(marks[count],": GRADE C");
            break;
        case marks[count]<=80:
            console.log(marks[count],": GRADE B");
            break;
        case marks[count]<=100:
            console.log(marks[count],": GRADE A");
            break;
        default:
            console.log(marks[count],": NO GRADE");
            break;
    }
    count++
} while (count<marks.length)

// OUTPUT
/*
node FeatureRequest4.js 
34 : GRADE D
56 : GRADE C
72 : GRADE B
80 : GRADE B
92 : GRADE A
25 : GRADE D
98 : GRADE A
35 : GRADE D
40 : GRADE C
10 : GRADE F
*/