import {Header} from "../components/Header/Header";
import {LibrarySearch} from "../components/LibrarySearch/LibrarySearch";
import {Library} from "../components/Library/Library";
import debounce from "lodash.debounce";
import {useCallback, useState} from "react";
import {search} from "../BooksAPI";

export const GlobalLibrary = ({linkToHome}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([])

    const searchCallback = (updatedSearchTerm) => {
        setSearchTerm(updatedSearchTerm)
        apiSearch(updatedSearchTerm)
    }

    const apiSearch = useCallback(
        debounce(async (searchTerm) => {
            search(searchTerm, 1) // fixme: maxResults value is ignored
                .then(result => {
                    if (Array.isArray(result)) {
                        setBooks(result);
                    } else if (result && result.error) {
                        console.error('Error response received:', result.error);
                        setBooks([])
                    } else {
                        console.error('Unexpected response format:', result);
                        setBooks([])
                    }
                })
                .catch(error => setBooks([]))
        }, 300),
        [search, debounce]
    );

    return (<div className="search-books">
        <Header breadcrumb={"Global Library"}/>
        <LibrarySearch linkToHome={linkToHome} searchTerm={searchTerm} search={searchCallback}/>
        {  books && books.length > 0 ? <Library books={books} setBooksCallback={setBooks}/> : <></> }
    </div>)
}