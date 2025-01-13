class Book {
    constructor (name_of_book, author, year_of_book){
        this.name_of_book = name_of_book;
        this.author = author;
        this.year_of_book = year_of_book;
    }

    PrintInfo() {
        console.log(`Name of Book: ${this.name_of_book};`);
        console.log(`Author: ${this.author};`);
        console.log(`Year of Book: ${this.year_of_book}`);
    }
}

// Need to commit for the EBook.js
const newBook_1 = new Book('Harry Potter', 'Joanne Rowling', 1997);
const newBook_2 = new Book('Travels of Gulliver', 'Jonathan Swift', 1726)

newBook_1.PrintInfo()
newBook_2.PrintInfo()

export default Book;



