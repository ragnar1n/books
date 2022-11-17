class Book{
    constructor(title,author,isbn) {
        this.title=title
        this.author=author
        this.isbn=isbn
    }
}
class UI{
    static LSbooks(){
        const books=LS.bookStorage()
        books.forEach((book)=>UI.addBookToLS(book))
    }
    static addBookToLS(book){
        const bookList=document.querySelector('#book-list')
        const tr=document.createElement('tr')

        tr.innerHTML =`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="del">x</a></td>`
        bookList.appendChild(tr)
    }
    static delBook(a){
        if (a.classList.contains('del')){
            if (confirm('Are you sure?')){
                a.parentElement.parentElement.remove()
            }
        }
    }
    static clear() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
class LS {
    static bookStorage() {
        let books

        if (localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }
    static addBook(book){
        let books=LS.bookStorage()
        books.push(book)
        localStorage.setItem('books',JSON.stringify(books))
    }
    static deleteBookFromLS(isbn){
        let books=LS.bookStorage()
        books.forEach((book,index)=>{
            if (book.isbn===isbn){
                books.splice(index,1)
            }
            })
        localStorage.setItem('books',JSON.stringify(books))
    }
}

const form=document.querySelector('#addBook')

form.addEventListener('submit', addBook)
document.addEventListener('DOMContentLoaded',UI.LSbooks)

function addBook(event){
    // get form input values
    const title=document.querySelector('#title').value
    const author=document.querySelector('#author').value
    const isbn=document.querySelector('#isbn').value

    book=new Book(title,author,isbn)
    UI.addBookToLS(book)
    LS.addBook(book)
    UI.clear()
    event.preventDefault()
}

document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.delBook(e.target)
    LS.deleteBookFromLS(e.target.parentElement.previousElementSibling.textContent)
})