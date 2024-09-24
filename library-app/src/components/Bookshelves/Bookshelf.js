import {Book} from "./Book";

export const Bookshelf = ({category, books}) => {
    return <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books
                    .filter(book => book.currentBookshelf===category)
                    .map(book => {
                        return (<Book
                            title={book.title}
                            authors={book.authors}
                            coverUrl={book.coverUrl}
                        />)
                    }
                )}
            </ol>
        </div>
    </div>;
}