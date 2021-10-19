class BookList {
  constructor() {
    ;(this.numReadBooks = 0),
      (this.numUnreadBooks = 0),
      (this.currentBook = null),
      (this.lastBookReaded = null),
      (this.nextBook = null),
      (this.allBooks = [])
  }

  addBook(book) {
    if(this.allBooks.includes(book.title)){
      return 'Este livro já está na lista'
    } else {
      this.allBooks = [...this.allBooks, book]
      console.log(`O Livro ${book.title} foi adicionado com sucesso!`)
      this.updateBookList()
    }
  }

  finishCurrentBook(){
    if(this.currentBook != null){
    this.currentBook.read = true
    this.currentBook.readDate = new Date()
    console.log(`Livro ${this.currentBook.title} Finalizado com Sucesso!`)
    this.updateBookList()
    } else {return 'Não há livro atual para finalizar'}
  }

  updateBookList(){
    this.countBooks()
    this.orderBookList()
  }

  countBooks(){
    this.numReadBooks = this.allBooks.reduce((acc,current)=>current.read ? acc+=1 : acc, 0)
    this.numUnreadBooks = this.allBooks.length - this.numReadBooks
    console.log(`Há ${this.numReadBooks} livro(s) lidos e ${this.numUnreadBooks} livro(s) não lidos na lista`)
  }

  orderBookList(){
    const readBookList = this.allBooks.filter(book=>book.read)
    const unreadBookList = this.allBooks.filter(book=>!book.read)
    this.currentBook = unreadBookList.length > 0 ? unreadBookList[0] : 'Você não está lendo livros atualmente'
    this.lastBookReaded = readBookList.length > 0 ? readBookList.reduce(
      (acc,current)=> current.readDate >= acc.readDate ? current : acc, readBookList[0]) : 'Não há último livro lido'
    this.nextBook = unreadBookList.length > 1 ? unreadBookList[1] : 'Não há próximo livro'
  }
}

class Book {
  constructor(title, genre, author, read, readDate) {
    ;(this.title = title),
      (this.genre = genre),
      (this.author = author),
      (this.read = read),
      (this.readDate = this.read ? this.setDate(readDate) : 'Não finalizado')
  }
  setDate(date){
    if(date === undefined){
      console.log(`Você não colocou uma data no livro "${this.title}", então colocamos uma para você!`)
      return this.readDate = new Date()
    } else {
      return this.readDate = new Date(date)
    }
  }
}
