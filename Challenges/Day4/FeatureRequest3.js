// PATTERN PRINTING SCRIPT: WRITE A SCRIPT THAT PRINTS A PATTERN OF STARS USING A NESTED LOOP
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