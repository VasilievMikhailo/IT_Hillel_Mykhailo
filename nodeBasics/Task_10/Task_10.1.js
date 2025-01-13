// class Book {
//     constructor(name_of_book, author, year_of_book) {
//         this.name_of_book = name_of_book;
//         this.author = author;
//         this.year_of_book = year_of_book;
//     }

//     get name_of_book() {
//         return this._name_of_book;
//     }

//     set name_of_book(value) {
//         if (typeof value !== 'string') {
//             throw new Error('Name of book must be a string.');
//         } else if (value.trim() === '') {
//             throw new Error('Name of book should not be empty')
//         } else {
//             this._name_of_book = value;
//         }
//     }

//     get author() {
//         return this._author;
//     }

//     set author(value) {
//         if (typeof value !== 'string') {
//             throw new Error('Name of author must be a string.');
//         } else if (value.trim() === '') {
//             throw new Error('Name of author should not be empty')
//         } else {
//             this._author = value;
//         }
//     }

//     get year_of_book() {
//         return this._year_of_book;
//     }

//     set year_of_book(value) {
//         if (typeof value !== 'number') {
//             throw new Error("Number of year can't be a string.");
//         } else if (value < 0) {
//             throw new Error("Number of year must be a positive integer.");
//         } else if (!Number.isInteger(value)) {
//             throw new Error("Number of year must be integer.");
//         } else {
//             this._year_of_book = value;
//         }
//     }

//     PrintInfo() {
//         console.log(`Name of Book: ${this.name_of_book};`);
//         console.log(`Author: ${this.author};`);
//         console.log(`Year of Book: ${this.year_of_book}`);
//     }
// }

// class EBook extends Book {
//     constructor(name_of_book, author, year_of_book, format_of_book) {
//         super(name_of_book, author, year_of_book);
//         this.format_of_book = format_of_book;
//     }

//     get format_of_book() {
//         return this._format_of_book;
//     }

//     set format_of_book(value) {
//         const newAllowedFormats = ['.pdf', '.docs', '.txt'];
//         if (!newAllowedFormats.includes(value)) {
//             throw new Error(`Allowed formats are: ${newAllowedFormats.join(', ')}`);
//         }
//         this._format_of_book = value;
//     }

//     PrintInfoEBook() {
//         console.log(`Name of Book: ${this.name_of_book};`);
//         console.log(`Author: ${this.author};`);
//         console.log(`Year of Book: ${this.year_of_book}`);
//         console.log(`Format of Book: ${this.format_of_book}\n`);
//     }
// }

// const newEBook_1 = new EBook('Harry Potter', 'Joanne Rowling', 1997, '.pdf');
// const newEBook_2 = new EBook('Travels of Gulliver', 'Jonathan Swift', 1726, '.docs');
// const newEBook_3 = new EBook('TEST', 'TEST', 23443, '.txt');


// try {
//     newEBook_1.PrintInfoEBook();

//     newEBook_1.name_of_book = '';
//     newEBook_1.PrintInfoEBook();
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     newEBook_2.name_of_book = 123123;
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     newEBook_1.author = '';
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     newEBook_2.author = 123123;
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     newEBook_1.year_of_book = '123';
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     newEBook_2.year_of_book = -1997;
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     newEBook_2.year_of_book = 1997.56;
// } catch (error) {
//     console.error(error.message);
// }
// try {
//     newEBook_3.format_of_book = '.exe';
// } catch (error) {
//     console.error(error.message);
// }


// class Book {
//         constructor(name_of_book, author, year_of_book) {
//             this.name_of_book = name_of_book;
//             this.author = author;
//             this.year_of_book = year_of_book;
//         }

//         static newOldestBookFind(books){
//             let oldest = books[0];
//             for (const book of books) {
//                 if (book.year_of_book < oldest.year_of_book) {
//                     oldest = book;
//                 }
//             }
//             return oldest;
//         }
// }


// class EBook extends Book {
//     constructor(name_of_book, author, year_of_book, format_of_book) {
//         super(name_of_book, author, year_of_book);
//         this.format_of_book = format_of_book;
//     }

//     PrintInfoEbook() {
//         console.log(`Name of Book: ${this.name_of_book};`);
//         console.log(`Author: ${this.author};`);
//         console.log(`Year of Book: ${this.year_of_book}`);
//         console.log(`Format of Book: ${this.format_of_book}\n`);
//     }
// }

// const newBook_1 = new Book('Harry Potter', 'Joanne Rowling', 1997);
// const newBook_2 = new Book('Travels of Gulliver', 'Jonathan Swift', 1726)

// const newEBook_1 = new EBook('Anatomy for the Artist', 'Sarah Simblet', 1600, '.pdf');
// const newEBook_2 = new EBook('Dynamic Human Anatomy', 'Monacelli Press', 2022, '.docs');

// const newArray_of_Copies = [newBook_1, newBook_2, newEBook_1, newEBook_2];
// const newOldestBook = Book.newOldestBookFind(newArray_of_Copies);

// console.log(newOldestBook)


class Book {
        constructor(name_of_book, author, year_of_book) {
            this.name_of_book = name_of_book;
            this.author = author;
            this.year_of_book = year_of_book;
        }
}

class EBook extends Book {
    constructor(name_of_book, author, year_of_book, format_of_book) {
        super(name_of_book, author, year_of_book);
        this.format_of_book = format_of_book;
    }

    static newBook_from_Book(book, format_of_book){
        return new EBook(book.name_of_book, book.author, book.year_of_book, format_of_book);
    }
}

const newBook = new Book('Dynamic Human Anatomy', 'Monacelli Press', 2022, '.docs');
const newEBook = EBook.newBook_from_Book(newBook, '.pdf');

console.log(newEBook)