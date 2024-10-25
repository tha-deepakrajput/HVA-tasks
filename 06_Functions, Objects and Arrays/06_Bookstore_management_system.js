let inventory = []

inventory = [
    {id: 1, title: 'Journey of the forest', author: 'sandeep', price: 200, quantity: 8, section: 1},
    {id: 2, title: 'Sita the warrior of mithila', author: 'shekhar kapur', price: 350, quantity: 1, section: 3},
    {id: 3, title: 'little little', author: 'vishal rathore', price: 400, quantity: 2, section: 8}
]

class Book {
    constructor(id, title, author, price, quantity, section) {
        this.id = id,
        this.title = title,
        this.author = author,
        this.price = price,
        this.quantity = quantity,
        this.section = section
    }
}

function displayBooks() {
    inventory.forEach(book => {
        console.log(`${book.title} - ${book.author}(${book.price})`);
    });
}
// displayBooks();


function addBook(id, title, author, price, quantity, section) {
    let newBook = new Book(id, title, author, price, quantity, section);
    inventory.push(newBook);
}
addBook(5, 'daily routine', 'shikhar shukla', 500, 2, 6);
displayBooks()


function updateBook(id, title, price) {
    let bookUpdate = inventory.find(book => book.id === id);
    if(bookUpdate){
        bookUpdate.title = title,
        bookUpdate.price = price
    }
    else {
        console.log(`Match not found`);
    }
}
updateBook(1, 'Journey of the jungle', 400);
// displayBooks();


function removeBook(id) {
    inventory = inventory.filter(book => book.id !== id);
}
removeBook(2);
displayBooks();