import {categories} from "./Categories";
import {update} from "../../BooksAPI";

export const BookRelocator = ({book, setBooksCallback}) => {

    const moveBook = async (updatedBookshelf) => {
        console.debug("move " + book.title + " from " + book.shelf + " to " + updatedBookshelf);
        setBooksCallback(prevState => {
            const unchangedBooks = prevState.filter(b => b.title !== book.title);
            const bookToUpdate = prevState.find(b => b.title === book.title); // Using find for clarity

            return [...unchangedBooks, { ...bookToUpdate, shelf: updatedBookshelf }];
        });
        await update(book, updatedBookshelf);
    };

    const NONE = categories[3];
    return <div className="book-shelf-changer">
        <select
            value={book.shelf ? book.shelf : NONE.slug}
            onChange={(e) => moveBook(e.target.value)}
        >
            <option disabled>
                Move to...
            </option>
            {categories.map(category => {
                return (
                    <option
                        value={category.slug}
                        key={category.slug}
                    >
                        {category.label}
                    </option>
                )
            })}
        </select>
    </div>;
};
