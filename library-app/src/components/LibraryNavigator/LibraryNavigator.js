import {Link} from "react-router-dom";

export const LibraryNavigator = ({linkToSearch}) => {
    return (
        <div className="open-search">
            <Link
                to={{
                    pathname: linkToSearch
                }}
            >Add a book
            </Link>
        </div>
    )
}