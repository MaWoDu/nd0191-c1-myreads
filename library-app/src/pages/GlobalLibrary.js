import {Header} from "../components/Header/Header";
import {LibrarySearch} from "../components/LibrarySearch/LibrarySearch";
import {Library} from "../components/Library/Library";
import debounce from "lodash.debounce";
import {useCallback} from "react";

export const GlobalLibrary = ({linkToHome}) => {

    const searchCallback = useCallback(
        debounce((searchTerm) => {
            console.log("Search Term:", searchTerm);
        }, 300),
        []
    );


    return (<div className="search-books">
        <Header breadcrumb={"Global Library"}/>
        <LibrarySearch linkToHome={linkToHome} search={searchCallback}/>
        <Library/>
    </div>)
}