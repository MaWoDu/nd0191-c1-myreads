import {categories} from "./Categories";

export const BookRelocator = ({currentBookshelf}) =>
    <div className="book-shelf-changer">
        <select>
            <option value="none" disabled>
                Move to...
            </option>
            {categories.map(category => {
                return (
                    <option value={toSlug(category)}>{category}</option>
                )
            })}
        </select>
    </div>;

function toSlug(str) {
    return str
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .trim()
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join('');
}