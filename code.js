const myLibrary = [];

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
        author.textContent = livro.author

        const pages = document.createElement('p')
        pages.textContent = livro.pages

        bookDiv.appendChild(title)
        bookDiv.appendChild(author)
        bookDiv.appendChild(pages)

        libraryDiv.appendChild(bookDiv)
}}

const addButton = document.querySelector('#addBook')
addButton.addEventListener('click',function (event){
    event.preventDefault()

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    
    if (title === "" || author === "" || pages === "") {
        alert('Por favor, preencha todos os campos.');
    }
    else {
        let livro = new Book(title,author,pages)
        addBookToLibrary(livro)
        displayLibrary()
    }
})
