// OBJECT ITERATION SCRIPT: WRITE A SCRIPT THAT DEMONSTRATES ITERATING OVER AN OBJECT'S PROPERTIES USING `for...in` LOOP AND `Object.keys` / `Object.values`

let book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    summary:"A novel about the events in the life of a young man named Holden Caulfield, who recounts his experiences in New York City after being expelled from his prep school.",
}

console.log("Object key and its value is as follows...");
for(key in book)
{
    console.log(`Key: ${key} & Value: ${book[key]}`);
}
console.log("----------------------------\n");

console.log("All keys in book object:",Object.keys(book));
console.log("All values in book object:",Object.values(book));
console.log("----------------------------\n");

// OUTPUT
/*
node FeatureRequest3.js
Object key and its value is as follows...
Key: title & Value: The Catcher in the Rye
Key: author & Value: J.D. Salinger
Key: year & Value: 1951
Key: summary & Value: A novel about the events in the life of a young man named Holden Caulfield, who recounts his ex
periences in New York City after being expelled from his prep school.
----------------------------

All keys in book object: [ 'title', 'author', 'year', 'summary' ]
All values in book object: [
  'The Catcher in the Rye',
  'J.D. Salinger',
  1951,
  'A novel about the events in the life of a young man named Holden Caulfield, who recounts his experiences in New Yo
rk City after being expelled from his prep school.'
]
----------------------------

*/