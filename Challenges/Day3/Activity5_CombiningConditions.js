// TASK 7: WRITE A PROGRAM TO CHECK IF A YEAR IS A LEAP YEAR USING MULTIPLE CONDITIONS (DIVISIBLE BY 4, BUT NOT 100 UNLESS ALSO DIVISIBLE BY 400) AND LOG THE RESULT TO THE CONSOLE

let year = 2024;
if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
{
    console.log(year,"is a leap year!");
}
else
{
    console.log(year,"is not a leap year!");
}

// OUTPUT
/*
node Activity5_CombiningConditions.js 
2024 is a leap year!
*/