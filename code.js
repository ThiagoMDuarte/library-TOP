const myLibrary = [
    {
        title: "O Senhor dos Anéis",
        author: "J.R.R. Tolkien",
        pages: 1178,
        read: false
      }
];

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary (book) {
    myLibrary.push(book)
}

const livro2 = new Book('Teste titulo','Teste autor',222,true)
addBookToLibrary(livro2)

function displayLibrary (myLibrary) {
    for (const livro of myLibrary)
        console.log(`Título: ${livro.title}, Autor: ${livro.author}, Páginas: ${livro.pages}, Lido: ${livro.read}`)
}

displayLibrary(myLibrary)