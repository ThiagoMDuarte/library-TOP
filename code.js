const myLibrary = [
    {
        title: "O Senhor dos Anéis",
        author: "J.R.R. Tolkien",
        pages: 1178
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328
    }
];

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    //this.read = read
}

function addBookToLibrary (book) {
    myLibrary.push(book)
}

/* const livro2 = new Book('Teste titulo','Teste autor',222,true)
addBookToLibrary(livro2) */

function displayLibrary (myLibrary) {
    const libraryDiv = document.querySelector('.myLibrary')

    for (const livro of myLibrary) {
        const bookDiv = document.createElement('div')
        bookDiv.className = 'book'

        const title = document.createElement('h3')
        title.textContent = livro.title

        const author = document.createElement('p')
        author.textContent = livro.author

        const pages = document.createElement('p')
        pages.textContent = livro.pages

        bookDiv.appendChild(title)
        bookDiv.appendChild(author)
        bookDiv.appendChild(pages)

        libraryDiv.appendChild(bookDiv)
}}


displayLibrary(myLibrary)


const addButton = document.querySelector('#addBook')
addButton.addEventListener('click',buttonCLicked)

function buttonCLicked (event) {
    event.preventDefault()
}