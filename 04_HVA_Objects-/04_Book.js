class book {
  constructor(title, author, year, publisher, genre) {
    this.title = title 
    this.author = author
    this.year = year
    this.publisher = publisher
    this.genre = genre
    this.classicBook = {
      title : title,
      author : author,
      year: year,
      publisher : publisher,
      genre : genre
    }
    this.sciFiBook = {
      title: title,
      author: author,
      year: year,
      publisher: publisher,
      genre: genre
    }
  }

  describe() {
    console.log(`${this.title} - ${this.author} (${this.year})`);
  }

  displayGenre() {
    console.log(`Genre : ${this.genre}`);
  }
}

// console.log(this.classicBook);

let book1 = new book("Pride and Prejudice", "Jane Austen", 1813, "T. Egerton", "Classic")
let book2 = new book("Dune", "Frank Herbert", "Chilton Books", 1965, "Science Fiction")

book1.describe()
book1.displayGenre()

book2.describe()
book2.displayGenre()