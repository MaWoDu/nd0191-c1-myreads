import {Book} from "./Book";

export const Bookshelf = ({category, books}) => {
    return <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => {
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