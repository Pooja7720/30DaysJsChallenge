// NUMBER PRINTING SCRIPT: WRITE A SCRIPT THAT PRINTS NUMBERS FROM 1 TO 10 USING A FOR LOOP AND A WHILE LOOP

console.log("PRINTING NUMBERS USING FOR LOOP!");
for(i=1;i<=10;i++)
{
    console.log(i);
}
console.log("----------------------------------");

console.log("PRINTING NUMBERS USING WHILE LOOP!");
let val = 1;
while(val<=10)
{
    console.log(val);
    val++;
}
console.log("----------------------------------");

// OUTPUT
/*
node FeatureRequest1.js
PRINTING NUMBERS USING FOR LOOP!
1
2
3
4
5
6
7
8
9
10
----------------------------------
PRINTING NUMBERS USING WHILE LOOP!
1
2
3
4
5
6
7
8
9
10
----------------------------------
*/