// TASK 7: ADD A METHOD TO THE BOOK OBJECT THAT USES THE `this` KEYWORD TO RETURN A STRING WITH THE BOOK'S TITLE AND YEAR, AND LOG THE RESULT OF CALLING THIS METHOD

let book = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,

    info()
    {
        return `The title of book is ${this.title} and year of publication is ${this.year}`;
    }
}
console.log(book.info())
console.log("-------------------------------");

// OUTPUT
/*
node Activity4_TheThisKeyword.js 
The title of book is Pride and Prejudice and year of publication is 1813
-------------------------------
*/