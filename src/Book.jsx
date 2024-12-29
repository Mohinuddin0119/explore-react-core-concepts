import './book.css'

function Book({books}){
    // console.log(books)
    const {name,price} = books
    // console.log(name)
    // console.log(price)
    return (
        <div className="book">
            <li>Book name: {books.name}</li>
            <li>Book price: {books.price}</li>
            <li>Book name: {name}</li>
            <li>Book price: {price}</li>
        </div>
    )
}

export default Book;