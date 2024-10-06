import {Bookshelf} from "./Bookshelf";
import {categories} from "./Categories";

export const Bookshelves = ({books, setBooksCallback}) => {

    if (!books) {
        return (<div>loading</div>)
    }

    return (<div className="list-books-content">
            <div>
                {categories
                    .filter(bookshelfCategory => bookshelfCategory.isVisible)
                    .map(bookshelfCategory => {
                        return (<Bookshelf
                            category={bookshelfCategory}
                            books={books.filter(book => book.shelf === bookshelfCategory.slug)}
                            setBooksCallback={setBooksCallback}
                            key={bookshelfCategory.slug}
                        />)
                    })}

            </div>
        </div>)
}