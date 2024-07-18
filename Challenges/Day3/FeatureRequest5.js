// LEAP YEAR CHECK SCRIPT: WRITE A SCRIPT THAT CHECKS IF THE YEAR IS A LEAP YEAR USING MULTIPLE CONDITIONS AND LOG THE RESULT.

let years = [2000,2012,2005,2006,2008,2003,2020,2021,2022,2023,2024];
for(i = 0; i<years.length; i++)
{
    let year = years[i]
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        {
            console.log(year,"is a leap year!");
        }
        else
        {
            console.log(year,"is not a leap year!");
        }
}

// OUTPUT
/*
node FeatureRequest5.js 
2000 is a leap year!
2012 is a leap year!
2005 is not a leap year!
2006 is not a leap year!
2008 is a leap year!
2003 is not a leap year!
2020 is a leap year!
2021 is not a leap year!
2022 is not a leap year!
2023 is not a leap year!
2024 is a leap year!
*/