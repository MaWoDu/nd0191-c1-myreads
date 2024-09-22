import {Link} from "react-router-dom";

export const LibrarySearch = ({linkToHome}) => {
    return (
        <div className="search-books-bar">
            <Link
                className="close-search"
                to={linkToHome}
            >
                Close
            </Link>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                />
            </div>
        </div>
    );
}