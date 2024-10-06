import {Book} from "./Book/Book";

export const Bookshelf = ({category, books, setBooksCallback}) => {
    return <div className="bookshelf">
        <h2 className="bookshelf-title">{category.label}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books
                    .map((book, index) => {
                        return (<Book
                            book={book}
                            setBooksCallback={setBooksCallback}
                            key={book.title + "_" + index}
                        />)
                    })}
            </ol>
        </div>
    </div>;
}