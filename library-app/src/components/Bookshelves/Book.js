import {BookRelocator} from "./BookRelocator";

export function Book({book, setBooksCallback}) {

    return <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`,
                    }}
                ></div>
                <BookRelocator
                    currentBookshelf={book.shelf}
                    book={book}
                    setBooksCallback={setBooksCallback}
                />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    </li>;
}