const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary (book) {
    myLibrary.push(book)
}

/* Essa parte vai ser um dialog */
let teste1 = new Book ('titulo1','autor1',111,'true')

/* Um botão de ADICIONAR */
addBookToLibrary(teste1)

console.log(myLibrary)

/* Tudo dentro da função DISPLAY LIBRARY */
const container = document.querySelector('.container')

let div1 = document.createElement('div')
div1.classList.add('teste')
/* UM LOOP FOR ... OF para capturar TITULO, AUTOR, PAG */
div1.textContent = myLibrary[0].author

container.appendChild(div1)