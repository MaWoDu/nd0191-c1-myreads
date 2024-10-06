import {Bookshelf} from "./Bookshelf";
import {categories} from "./Categories";
import {useEffect, useState} from "react";
import {getAll} from "../../BooksAPI";

export const Bookshelves = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function fetchData() {
            return await getAll();
        }

        fetchData().then(booksResult => setBooks(booksResult))
    }, []);

    if (!books) {
        return (<div>loading</div>)
    }

    return (<div className="list-books-content">
            <div>
                {categories
                    .filter(bookshelfCategory => bookshelfCategory.isVisible)
                    .map(bookshelfCategory => {
                        return (<Bookshelf
                            category={bookshelfCategory}
                            books={books.filter(book => book.shelf === bookshelfCategory.slug)}
                            setBooksCallback={setBooks}
                            key={bookshelfCategory.slug}
                        />)
                    })}

            </div>
        </div>)
}