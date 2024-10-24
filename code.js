const myLibrary = [
    { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien' },
    { title: '1984', author: 'George Orwell' },
]; 


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

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(delBtn);

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
    
        let livro = { title, author, pages };
        addBookToLibrary(livro); 
        displayLibrary(); 
        document.getElementById('bookForm').reset();
});

displayLibrary()