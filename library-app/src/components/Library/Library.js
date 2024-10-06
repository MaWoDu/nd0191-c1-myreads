import {Bookshelf} from "../Bookshelves/Bookshelf";

export const Library = ({books, setBooksCallback}) => {
    return (
        <div className="search-books-results">
            <Bookshelf
                category={""}
                books={books}
                setBooksCallback={setBooksCallback}
                key={"library"}
            />
        </div>
    )
}