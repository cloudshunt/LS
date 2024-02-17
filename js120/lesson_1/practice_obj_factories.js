function createBook(title, author, read = false) {
  let bookObj = {
    title: title,
    author: author,
    read: read,

    getDescription() {
      let readMessage;
      if (read) readMessage = 'I have read it.';
      else readMessage = "I haven't read it.";

      return `${this.title} is by ${this.author}. ${readMessage}`;
    },

    readBook() {
      this.read = true;
    }


  };

  return bookObj;
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());

console.log(book1.read);
console.log(book2.read);
console.log(book3.read);

console.log(book1.readBook());
console.log(book2.readBook());

console.log(book1.read);
console.log(book2.read);
console.log(book3.read);