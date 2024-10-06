import {Book} from "./Book";

export const Bookshelf = ({category, books, moveBook}) => {
    return <div className="bookshelf">
        <h2 className="bookshelf-title">{category.label}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books
                    .map(book => {
                            return (<Book
                                title={book.title}
                                authors={book.authors}
                                coverUrl={book.imageLinks.thumbnail}
                                currentBookshelf={book.shelf}
                                moveBook={moveBook}
                                key={book.title}
                            />)
                        }
                    )}
            </ol>
        </div>
    </div>;
}