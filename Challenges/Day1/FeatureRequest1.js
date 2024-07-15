// VARIABLE TYPES CONSOLE LOG: WRITE A SCRIPT THAT DECLARES VARIABLES OF DIFFERENT DATA TYPES AND LOG BOTH THE VALUE AND THE TYPE OF EACH VARIABLE TO THE CONSOLE.

let num = 12.5;
let color = "Blue";
let a = true;
let b = false;
let place = {country:"India", state:"Maharashtra", city:"Mumbai"};
let arr = [12, 34, 56, 78, 90];
let val;
let venue = null;

console.table([[num,typeof(num)], [color,typeof(color)], [a,typeof(a)], [b,typeof(b)], [place,typeof(place)], [arr,typeof(arr)], [venue,typeof(venue), [val, typeof(val)]]]);

// OUTPUT
/*
$ node FeatureRequest1.js
┌─────────┬──────────────────────────────────┬───────────┬────────────────────────────┐
│ (index) │ 0                                │ 1         │ 2                          │
├─────────┼──────────────────────────────────┼───────────┼────────────────────────────┤
│ 0       │ 12.5                             │ 'number'  │                            │
│ 1       │ 'Blue'                           │ 'string'  │                            │
│ 2       │ true                             │ 'boolean' │                            │
│ 3       │ false                            │ 'boolean' │                            │
│ 4       │ [Object]                         │ 'object'  │                            │
│ 5       │ [ 12, 34, 56, ... 2 more items ] │ 'object'  │                            │
│ 6       │ null                             │ 'object'  │ [ undefined, 'undefined' ] │
└─────────┴──────────────────────────────────┴───────────┴────────────────────────────┘

*/