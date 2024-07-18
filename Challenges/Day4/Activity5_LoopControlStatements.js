// TASK 8: WRITE A PROGRAM TO PRINT NUMBERS FROM 1 TO 10, BUT SKIP THE NUMBER 5 USING THE continue STATEMENT.

for(i=1;i<=10;i++)
{
    if(i == 5)
    {
        console.log("WE NEED TO CONTINUE LOOP AT NUMBER 5!");
        continue;
    }
    else
    {
        console.log(i);
    }
}
console.log("----------------------------------");

// TASK 9: WRITE A PROGRAM TO PRINT NUMBERS FROM 1 TO 10, BUT STOP THE LOOP WHEN THE NUMBER IS 7 USING THE break STATEMENT.

for(i=0;i<=10;i++)
{
    if(i == 7)
    {
        console.log("WE NEED TO STOP LOOP AT NUMBER 7!")
        break;
    }
    else{
        console.log(i)
    }
}
console.log("----------------------------------");

// OUTPUT
/*
node Activity5_LoopControlStatements.js 
1
2
3
4
WE NEED TO CONTINUE LOOP AT NUMBER 5!
6
7
8
9
10
----------------------------------
0
1
2
3
4
5
6
WE NEED TO STOP LOOP AT NUMBER 7!
----------------------------------
*/