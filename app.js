const form=document.querySelector('#addBook')



form.addEventListener('submit', addBook)


function addBook(event){
    // get form input values
    const titleInput=document.querySelector('#title')
    const authorInput=document.querySelector('#author')
    const isbnInput=document.querySelector('#isbn')

    //create ul, li items and x link
    const ul1=document.createElement('ul')
    ul1.className='collection'

    const li=document.createElement('li')
    li.appendChild(document.createTextNode(titleInput.value))
    li.className='col s12 m4 collection-item'

    const li2=document.createElement('li')
    li2.appendChild(document.createTextNode(authorInput.value))
    li2.className='col s12 m4 collection-item'

    const li3=document.createElement('li')
    li3.appendChild(document.createTextNode(isbnInput.value))
    li3.className='col s12 m4 collection-item'

    const x=document.createElement('a')
    x.appendChild(document.createTextNode('x'))
    x.setAttribute('href','#')
    x.className='secondary-content'

    li3.appendChild(x)

    const ul=document.querySelector('ul')

    ul1.appendChild(li)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    ul.appendChild(ul1)

    // console.log(li)
    //delete input value from form input fields
    titleInput.value=''
    authorInput.value=''
    isbnInput.value=''
    event.preventDefault()
}

