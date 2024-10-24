const myLibrary = [
    {
        title: 'Titulo do Livro',
        author: 'Autor do livro',
        pages: 222
    }
];

displayLibrary()

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary (book) {
        myLibrary.push(book)
}

function displayLibrary () {

    const libraryDiv = document.querySelector('.myLibrary')
    libraryDiv.innerHTML = ''

    for (const livro of myLibrary) {
        const bookDiv = document.createElement('div')
        bookDiv.className = 'book'

        const title = document.createElement('h3')
        title.textContent = livro.title

        const author = document.createElement('p')
        author.textContent = `Autor: ${livro.author}`

        const pages = document.createElement('p')
        pages.textContent = `Número de páginas: ${livro.pages}`

        bookDiv.appendChild(title)
        bookDiv.appendChild(author)
        bookDiv.appendChild(pages)

        libraryDiv.appendChild(bookDiv)
}}

const form = document.querySelector('#bookForm')

form.addEventListener('submit',function(event){
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    
        let livro = new Book(title,author,pages)
        addBookToLibrary(livro)
        displayLibrary()
})
