// NUMBER CHECK SCRIPT: WRITE A SCRIPT THAT CHECKS IF A NUMBER IS POITIVE, NEGATIVE, OR ZERO USING IF-ELSE STATEMENTS AND LOG THE RESULT.

let arr = [12, 31, 0, -34, 19, -15, 0, -18, 90, 54, 0, 32, -78, 0, -22];
let positive = [];
let negative = [];
let zeros = [];
for(i=0; i<arr.length; i++)
{
    if(arr[i] > 0 )
    {
        positive.push(arr[i]);
    }
    else if(arr[i] < 0)
    {
        negative.push(arr[i]);
    }
    else
    {
        zeros.push(arr[i]);
    }

}

console.log("Positive Numbers array: ",positive);
console.log("Negative Numbers array: ",negative);
console.log("Zero Numbers array: ",zeros);

// OUTPUT
/*
node FeatureRequest1.js 
Positive Numbers array:  [ 12, 31, 19, 90, 54, 32 ]
Negative Numbers array:  [ -34, -15, -18, -78, -22 ]
Zero Numbers array:  [ 0, 0, 0, 0 ]
*/