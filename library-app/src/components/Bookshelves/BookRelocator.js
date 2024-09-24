import {categories} from "./Categories";

export const BookRelocator = ({currentBookshelf}) =>
    <div className="book-shelf-changer">
        <select defaultValue={currentBookshelf}>
            <option disabled>
                Move to...
            </option>
            {categories.map(category => {
                return (
                    <option
                        value={category.label}
                        key={category.slug}
                    >
                        {category.label}
                    </option>
                )
            })}
        </select>
    </div>;
