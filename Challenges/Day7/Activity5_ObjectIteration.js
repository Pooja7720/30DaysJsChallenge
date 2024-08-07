// TASK 8: USE A `for...in` LOOP TO ITERATE OVER THE PROPERTIES OF THE BOOK OBJECT AND LOG EACH PROPERTY AND ITS VALUE.

let book = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,

}
console.log("The object key and it's value:");
for(key in book)
{
    console.log(`Key: ${key} & Value: ${book[key]}`);
}
console.log("-------------------------------");

// TASK 9: USE `Object.keys` AND `Object.values` METHODS TO LOG ALL THE KEYS AND VALUES OF THE BOOK OBJECT.

console.log("All the keys in book object...");
console.log(Object.keys(book));

console.log("-------------------------------");
console.log("All the values in book object...");
console.log(Object.values(book));
console.log("-------------------------------");

// OUTPUT
/*
node Activity5_ObjectIteration.js 
The object key and it's value:
Key: title & Value: Pride and Prejudice
Key: author & Value: Jane Austen
Key: year & Value: 1813
-------------------------------
All the keys in book object...
[ 'title', 'author', 'year' ]
-------------------------------
All the values in book object...
[ 'Pride and Prejudice', 'Jane Austen', 1813 ]
-------------------------------
*/