const myLibrary = [
    { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', read: true},
    { title: '1984', author: 'George Orwell', read: false},
]; 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    const libraryDiv = document.querySelector('.myLibrary');
    libraryDiv.innerHTML = ''; 

    myLibrary.forEach((livro, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        const title = document.createElement('h3');
        title.textContent = livro.title;

        const author = document.createElement('p');
        author.textContent = livro.author;

        const pages = document.createElement('p');
        pages.textContent = livro.pages;

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.classList.add('deleteButton');
        delBtn.setAttribute('data-index', index); // IMPORTANTE
        delBtn.addEventListener('click', deleteBtn);

        const readButton = createReadButton(livro);

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(delBtn);

        bookDiv.appendChild(readButton);

        libraryDiv.appendChild(bookDiv);
    });
}

// Função que deleta um livro
function deleteBtn(event) {
    const index = event.target.getAttribute('data-index');
    myLibrary.splice(index, 1);
    displayLibrary();
}

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    const read = document.getElementById('read').checked;
    
        let newLivro = new Book(title, author, pages, read);
        addBookToLibrary(newLivro); 
        displayLibrary(); 
        document.getElementById('bookForm').reset();
});


function createReadButton(livro) {
    const readButton = document.createElement('button');
    readButton.className = 'read-status'; // Adiciona classe inicial
    readButton.textContent = livro.read ? 'Lido' : 'Não Lido'; // Define o texto com base no estado do livro

    // Muda a cor do botão conforme o status de leitura
    if (livro.read) {
        readButton.classList.add('lido'); // Se lido, aplica a classe "lido"
    }

    // Evento de clique para alternar o estado de leitura
    readButton.addEventListener('click', function () {
        livro.read = !livro.read; // Alterna o estado do livro
        readButton.textContent = livro.read ? 'Lido' : 'Não Lido'; // o

        // Alterna a cor do botão com base no estado
        if (livro.read) {
            readButton.classList.add('lido'); // Adiciona a classe "lido"
        } else {
            readButton.classList.remove('lido'); // Remove a classe "lido"
        }
    });

    return readButton;
}

displayLibrary()