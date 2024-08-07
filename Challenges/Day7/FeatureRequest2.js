// LIBRARY OBJECT SCRIPT: CREATE A SCRIPT THAT DEFINES A LIBRARY OBJECT CONTAINING AN ARRAY OF BOOK OBJECTS AND LOGS THE LIBRARY'S DETAILS.

let library = {
    name:"Newyork City",
    books: [
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
    ]
}

console.log("The library name is:",library.name);

for(let i = 0; i<library.books.length; i++)
{
    for(key in library.books[i])
    {
        console.log(`Key: ${key} & Value: ${library.books[i][key]}`);
    }
    console.log("----------------------------\n");
}

// OUTPUT
/*
node FeatureRequest2.js
The library name is: Newyork City
Key: title & Value: The Great Gatsby
Key: author & Value: F. Scott Fitzgerald
Key: year & Value: 1925
----------------------------

Key: title & Value: 1984
Key: author & Value: George Orwell
Key: year & Value: 1949
----------------------------

Key: title & Value: To Kill a Mockingbird
Key: author & Value: Harper Lee
Key: year & Value: 1960
----------------------------

Key: title & Value: Pride and Prejudice
Key: author & Value: Jane Austen
Key: year & Value: 1813
----------------------------

Key: title & Value: Moby Dick
Key: author & Value: Herman Melville
Key: year & Value: 1851
----------------------------
*/