// TASK 3: ADD A METHOD TO THE BOOK OBJECT THAT RETURNS A STRING WITH THE BOOK'S TITLE AND AUTHOR, AND LOG THE RESULT OF CALLING THIS METHOD.

let book = {
    bookInfo()
    {
        return console.log(`The author of this book is ${this.author} and title of this book is ${this.title}`);
    },
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813
}
book.bookInfo();
console.log("-------------------------------");

// TASK 4: ADD A METHOD TO THE BOOK OBJECT THAT TAKES A PARAMETER (YEAR) AND UPDATES THE BOOK'S YEAR PROPERTY, THEN LOG THE UPDATED OBJECT.

book = {
    updateYear(year)
    {
        this.year = year;
    },
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813
}
console.log("Book object before updating:",book);
book.updateYear(2024);
console.log("Book object after updating:",book);

// OUTPUT
/*
node Activity2_ObjectMethods.js 
The author of this book is Jane Austen and title of this book is Pride and Prejudice
-------------------------------
Book object before updating: {
  updateYear: [Function: updateYear],
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  year: 1813
}
Book object after updating: {
  updateYear: [Function: updateYear],
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  year: 2024
}

*/