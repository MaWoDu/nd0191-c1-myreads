import {BookRelocator} from "../BookRelocator";
import {categories} from "../Categories";

export function Book({book, setBooksCallback}) {
    function getThumbnail() {
        return book?.imageLinks?.thumbnail || "";
    }

    function getTitle() {
        return book?.title || "";
    }

    function getAuthors() {
        return book?.authors || "";
    }

    function getCurrentBookshelf() {
        return book?.shelf || categories[0].slug;
    }

    return <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${(getThumbnail())})`,
                    }}
                ></div>
                <BookRelocator
                    currentBookshelf={getCurrentBookshelf()}
                    book={book}
                    setBooksCallback={setBooksCallback}
                />
            </div>
            <div className="book-title">{getTitle()}</div>
            <div className="book-authors">{getAuthors()}</div>
        </div>
    </li>;
}