import Book from './Book.js';

class EBook extends Book {
	constructor(name_of_book, author, year_of_book, format_of_book) {
		super(name_of_book, author, year_of_book);
		this.format_of_book = format_of_book;
	}

	PrintInfoEbook() {
		console.log(`Name of Book: ${this.name_of_book};`);
		console.log(`Author: ${this.author};`);
		console.log(`Year of Book: ${this.year_of_book}`);
		console.log(`Format of Book: ${this.format_of_book}\n`);
	}
}

const newEBook_1 = new EBook('Harry Potter', 'Joanne Rowling', 1997, '.pdf');
const newEBook_2 = new EBook('Travels of Gulliver', 'Jonathan Swift', 1726, '.docs');

newEBook_1.PrintInfoEbook();
newEBook_2.PrintInfoEbook();
