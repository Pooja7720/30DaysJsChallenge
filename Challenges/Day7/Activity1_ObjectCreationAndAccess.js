// TASK 1: CREATE AN OBJECT REPRESENTING A BOOK WITH PROPERTIES LIKE TITLE, AUTHOR, AND YEAR, AND LOG THE OBJECT TO THE CONSOLE.
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}
console.log("The book object is:",book);
console.log("-------------------------------");

// TASK 2: ACCESS AND LOG THE TITLE AND AUTHOR PROPERTIES OF THE BOOK OBJECT.
console.log("The title of the book is:",book.title);
console.log("The author of the book is:",book["author"]);
console.log("-------------------------------");

// OUTPUT
/*
node Activity1_ObjectCreationAndAccess.js 
The book object is: {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925
}
-------------------------------
The title of the book is: The Great Gatsby
The author of the book is: F. Scott Fitzgerald
-------------------------------

*/