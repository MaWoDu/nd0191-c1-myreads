import {BookRelocator} from "./BookRelocator";

export function Book({title, authors, coverUrl, currentBookshelf, moveBook}) {

    return <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${coverUrl})`,
                    }}
                ></div>
                <BookRelocator
                    currentBookshelf={currentBookshelf}
                    moveBookCallback={moveBook}
                />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    </li>;
}