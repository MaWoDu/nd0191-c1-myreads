export const LibrarySearch = ({onCloseSearch}) => {
    return (
        <div className="search-books-bar">
            <a
                className="close-search"
                onClick={onCloseSearch}
            >
                Close
            </a>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                />
            </div>
        </div>
    );
}