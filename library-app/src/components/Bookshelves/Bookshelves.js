import {Bookshelf} from "./Bookshelf";
import {categories} from "./Categories";
import {useEffect, useState} from "react";
import {getAll, update} from "../../BooksAPI";

export const Bookshelves = () => {
    const [books, setBooks] = useState()

    useEffect(async () => {
        let all = await getAll();
        console.log(all)
        setBooks(all)
    }, []);

    const moveBook = async (title, currentBookshelf, updatedBookshelf) => {
        console.log("move " + title + " from " + currentBookshelf + " to " + updatedBookshelf)
        const unchangedBooks = books.filter(b => b.title !== title)
        const bookToUpdate = books.filter(b => b.title === title).at(0)
        await update(bookToUpdate, updatedBookshelf)
        bookToUpdate.shelf = updatedBookshelf
        setBooks([...unchangedBooks, bookToUpdate])
    }

    if (!books) {
        return (<div>loading</div>)
    }

    return (
        <div className="list-books-content">
            <div>
                {categories
                    .filter(bookshelfCategory => bookshelfCategory.isVisible)
                    .map(bookshelfCategory => {
                    return (<Bookshelf
                        category={bookshelfCategory}
                        books={books}
                        moveBook={moveBook}
                        key={bookshelfCategory.slug}
                    />)
                })}

            </div>
        </div>
    )
}