import { useState } from "react";
import Book from "./Book";
const BookList = () => {

    const [books, setBooks] = useState([
        {title: "Hallo", image: "afbeelding 1", author: "Man"},
        {title: "Grappige Trucs", image: "afbeelding 2", author: "Hans Klok"},
        {title: "Henk de Steen", image: "afbeelding 3", author: "Jan-Peter"}
    ])

    return (
        <section class="books">
            <div className="Text">
            <h1>De beste boekwinkel van Nederland</h1>
            <h2>Gratis verzending boven 25 euro</h2>
            <h3>Ontdek onze bestsellers</h3>
            </div>
            <div className="yes">
            {books.map((book) => (
                <div>
                    <Book title={book.title} author={book.author} image={book.image}/>
                </div>
            ))}
            </div>

        </section>
    );
}
 
export default BookList;