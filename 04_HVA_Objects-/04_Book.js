class book {
  constructor(title, author, publisher, year, genre) {
    this.title = title 
    this.author = author
    this.publisher = year
    this.genre = genre
    this.classicBook = {
      title : title,
      author : author,
      publisher : publisher,
      genre : genre
    }
  }

  describe() {
    console.log(`
      ${this.name} - ${this.author} (${this.year})
      `);
  }

  displayGenre() {
    console.log(`Genre : ${this.genre}`);
  }
}