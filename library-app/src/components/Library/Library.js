import {Bookshelf} from "../Bookshelves/Bookshelf";

export const Library = ({books, moveBook}) => {
    return (
        <div className="search-books-results">
            <Bookshelf
                category={""}
                books={books}
                moveBook={moveBook}
                key={"library"}
            />
        </div>
    )
}