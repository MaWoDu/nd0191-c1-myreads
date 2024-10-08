import {Link} from "react-router-dom";


export const LibrarySearch = ({linkToHome, searchTerm, search}) => {
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
                    value={searchTerm}
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    onChange={(t) => search(t.target.value)}
                />
            </div>
        </div>
    );
}