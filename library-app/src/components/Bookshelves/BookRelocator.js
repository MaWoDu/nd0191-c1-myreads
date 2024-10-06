import {categories} from "./Categories";

export const BookRelocator = ({currentBookshelf, moveBookCallback}) =>
    <div className="book-shelf-changer">
        <select
            value={currentBookshelf}
            onChange={(e) => moveBookCallback(e.target.value)}
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
