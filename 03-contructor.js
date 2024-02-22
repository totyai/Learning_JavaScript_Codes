// JavaScript code​​​​​​‌​‌​‌‌​​​‌‌‌​‌‌​​​​‌​‌‌​​ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = true;
const showHints = false;

const bookTitle = "Alice's Adventures in Wonderland"
const bookAuthor = "Lewis Carroll"
const bookPubYear = 1865
const bookISBN = 9798369203415

// Your code goes here
function Book (bookTitle, bookAuthor, bookISBN, bookPubYear) {
    this.title = bookTitle,
    this.author = bookAuthor,
    this.ISBN = bookISBN,
    this.publicationYear = bookPubYear
};


//Constracting
const result = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);

/*
Expected output:
Book {
  title: "Alice's Adventures in Wonderland",
  author: 'Lewis Carroll',
  ISBN: 9798369203415,
  publicationYear: 1865
}
*/