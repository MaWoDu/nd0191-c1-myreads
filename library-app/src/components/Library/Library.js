import {Bookshelf} from "../Bookshelves/Bookshelf";

export const Library = ({books, moveBook}) => {
    console.log(books, "-----")
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