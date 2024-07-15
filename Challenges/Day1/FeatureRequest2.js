// REASSIGNMENT DEMO: CREATE A SCRIPT THAT DEMONSTRATES THE DIFFERENCE IN BEHAVIOUR BETWEEN let AND const WHEN IT COMES TO REASSIGNMENT

let sky = "The sky is blue";
sky = "The sky is pink";
console.log(sky)

const color = "Red";
color = "Green";
console.log(color);

// OUTPUT
/*
$ node FeatureRequest2.js
The sky is pink
C:\Users\hp\Desktop\JavaScript\JavaScript\Challenges\Day1\FeatureRequest2.js:8
color = "Green";
      ^

TypeError: Assignment to constant variable.
*/