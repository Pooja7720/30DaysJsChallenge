// TASK 5: CREATE A NESTED OBJECT REPRESENTING A LIBRARY WITH PROPERTIES LIKE NAME AND BOOKS (AN ARRAY OF BOOK OBJECTS), AND LOG THE LIBRARY OBJECT TO THE CONSOLE.

// HERE BOOKS IS THE OBJECT OF OBJECTS
let library = {
    name: "City Library",
    books:
    {
        book1:
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        book2:
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        book3:
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        book4:
        {
            title:"Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        },
        book5:{
            title: "Moby Dick",
            author: "Herman Melville",
            year: 1851
        },
        book6:
        {
            title: "War and Peace",
            author: "Leo Tolstoy",
            year: 1869
        }
    }
}
console.log(Object.keys(library.books).length);
for(let i=0; i< Object.keys(library.books).length; i++)
{
    console.log(library.books[i]);
}
// NOTE : IT IS DIFFICULT TO ACCESS THE OBJECT INSIDE OBJECT SO WE ARE USING ARRAY OF OBJECTS TO ACCESS USING LOOPS

// HERE BOOK IS THE ARRAY OF OBJECTS
library = {
    name: "City Library",
    books:
    [ 
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },

        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        
        {
            title:"Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        },

        {
            title: "Moby Dick",
            author: "Herman Melville",
            year: 1851
        },

        {
            title: "War and Peace",
            author: "Leo Tolstoy",
            year: 1869
        }
    ]
}
for(let i=0; i< Object.keys(library.books).length; i++)
    {
        console.log(library.books[i]);
    }

console.log("-------------------------------");

// TASK 6: ACCESS AND LOG THE NAME OF THE LIBRARY AND THE TITLES OF ALL THE BOOKS IN THE LIBRARY.

console.log("Library name:",library.name);
console.log("Titles of all the books in the library...");
for(let i=0; i< library.books.length; i++)
{
    console.log(library.books[i].title);
}

// OUTPUT
/*
node Activity3_NestedObjects.js 
6
undefined
undefined
undefined
undefined
undefined
undefined
{
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925
}
{ title: '1984', author: 'George Orwell', year: 1949 }
{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
{ title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
{ title: 'Moby Dick', author: 'Herman Melville', year: 1851 }
{ title: 'War and Peace', author: 'Leo Tolstoy', year: 1869 }
-------------------------------
Library name: City Library
Titles of all the books in the library...
The Great Gatsby
1984
To Kill a Mockingbird
Pride and Prejudice
Moby Dick
War and Peace
*/