import {Header} from "../components/Header/Header";
import {LibrarySearch} from "../components/LibrarySearch/LibrarySearch";
import {Library} from "../components/Library/Library";

export const GlobalLibrary = ({linkToHome}) => {

    const searchCallback = (searchTerm) => {
        console.log(searchTerm)
    }

    return (<div className="search-books">
        <Header breadcrumb={"Global Library"}/>
        <LibrarySearch linkToHome={linkToHome} search={searchCallback}/>
        <Library/>
    </div>)
}