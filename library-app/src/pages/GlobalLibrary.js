import {Header} from "../components/Header/Header";
import {LibrarySearch} from "../components/LibrarySearch/LibrarySearch";
import {Library} from "../components/Library/Library";
import debounce from "lodash.debounce";
import {useCallback, useState} from "react";
import {search} from "../BooksAPI";

export const GlobalLibrary = ({linkToHome}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchCallback = (updatedSearchTerm) => {
        setSearchTerm(updatedSearchTerm)
        apiSearch(updatedSearchTerm)
    }

    const apiSearch = useCallback(
        debounce(async (searchTerm) => {
            let searchResults = await search(searchTerm, 1); // fixme: maxResults value is ignored
            console.log(searchResults);
        }, 300),
        []
    );

    return (<div className="search-books">
        <Header breadcrumb={"Global Library"}/>
        <LibrarySearch linkToHome={linkToHome} searchTerm={searchTerm} search={searchCallback}/>
        <Library/>
    </div>)
}