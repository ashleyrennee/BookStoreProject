/**This code is incomplete and is work in progress, outline for wishlish */

// Book class : users enter book info
    class book {
        constructor(title, author , isbn){
            this.title = title;
            this.author = author;
            this.isbn = isbn;
        }
    }
//UI
    class Display{
    Static displayBooks() {
        const StoredBooks = [
        {
            title: 'book one',
            author: 'author one',
            isbn: '12354'
        },
        {   
            title: 'book one',
            author: 'author one',
            isbn: '12354'
        }
    ];

    const books = StoredBooks;

    books.forEach(function(book));
    }
}
//store class: storage
//var bookTitle = prompt("What is the title?");
//var bookAuthor = prompt("Enter book author: ");
//var bookIsbn = prompt("Enter book ISBN: ");
//events : show books

//event : add book

//event: delete book

