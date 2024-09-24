import { useState } from "react";
import Book from "./Book";
const BookList = () => {

    const [books, setBooks] = useState([
        {title: "Hallo", image: "afbeelding 1", author: "Man"},
        {title: "Grappige Trucs", image: "afbeelding 2", author: "Hans Klok"},
        {title: "Henk de Steen", image: "afbeelding 3", author: "Jan-Peter"}
    ])

    return (
        <section>
            {books.map((book) => (
                <Book title={book.title} author={book.author} image={book.image}/>
            ))}

        </section>
    );
}
 
export default BookList;