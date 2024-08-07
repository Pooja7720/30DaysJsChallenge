// BOOK OBJECT SCRIPT: WRITE A SCRIPT THAT CREATES A BOOK OBJECT, ADDS METHODS TO IT, AND LOGS ITS PROPERTIES AND METHOD RESULTS.
const prompt = require('prompt-sync')();

let userChoice = 0;
let updatedYear = 0;

let book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    summary:"A novel about the events in the life of a young man named Holden Caulfield, who recounts his experiences in New York City after being expelled from his prep school.",

    getSummary()
    {
        return this.summary;
    },

    updateYear(newYear)
    {
        this.year = newYear;
    }
}

do {
    userChoice = Number(prompt("\nEnter your choice:\n1.Display all data\n2.Display title and author\n3.Display Summary\n4.Update year\n5.Exit"));
    switch(userChoice)
    {
        case 1:
            // DISPLAY ALL DATA
            for(key in book)
            {
                console.log(`Key: ${key} & Value: ${book[key]}`);
            }
            console.log("****************\n")
            break;

        case 2:
            // DISPLAY THE TITLE AND AUTHOR
            console.log(`The title and author of the book is:\nTitle = ${book.title}\nAuthor = ${book.author}`);
            console.log("****************\n")
            break;

        case 3:
            // DISPLAY SUMMARY
            console.log(`The summary of the book is:\n${book.summary}`);
            console.log("****************\n");
            break;

        case 4:
            // UPDATE YEAR
            updatedYear = Number(prompt("Enter the year to update:"));
            console.log("Year before updating:",book.year);
            book.updateYear(updatedYear);
            console.log("Year after updating:",book.year);
            console.log("****************\n");
            break;

        case 5:
            // EXIT
            console.log("****************\n");
            console.log("Exited from the manipulation...");
            break;
    }
} while (userChoice!=5);

// OUTPUT
/*
node FeatureRequest1.js 

Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year

Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year
5.Exit1
Key: title & Value: The Catcher in the Rye
Key: author & Value: J.D. Salinger
Key: year & Value: 1951
Key: summary & Value: A novel about the events in the life of a young man named Holden Caulfield, who recounts his ex
periences in New York City after being expelled from his prep school.
Key: getSummary & Value: getSummary()
    {
        return this.summary;
    }
Key: updateYear & Value: updateYear(newYear)
    {
        this.year = newYear;
    }
****************


Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year

Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year
5.Exit2
The title and author of the book is:
Title = The Catcher in the Rye
Author = J.D. Salinger
****************


Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year

Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year
5.Exit3
The summary of the book is:
A novel about the events in the life of a young man named Holden Caulfield, who recounts his experiences in New York 
City after being expelled from his prep school.
****************


Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year

Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year
5.Exit4
Enter the year to update:2024
Year before updating: 1951
Year after updating: 2024
****************


Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year

Enter your choice:
1.Display all data
2.Display title and author
3.Display Summary
4.Update year
5.Exit5
****************

Exited from the manipulation...
*/