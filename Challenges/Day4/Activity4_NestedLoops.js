// TASK 7: WRITE A PROGRAM TO PRINT A PATTERN USING NESTED FOR LOOPS.

for(row=0;row<5;row++)
{
    let star = [];
    for(col=0;col<=row;col++)
    {
        star.push("*");
    }
    star = star.join(' ');
    console.log(star);
}

// OUTPUT
/*
node Activity4_NestedLoops.js 
*
* *
* * *
* * * *
* * * * *
*/