import {Header} from "../components/Header/Header";
import {LibrarySearch} from "../components/LibrarySearch/LibrarySearch";
import {Library} from "../components/Library/Library";

export const GlobalLibrary = ({onNav}) => {
    return (<div className="search-books">
        <Header breadcrumb={"Global Library"}/>
        <LibrarySearch onCloseSearch={onNav}/>
        <Library/>
    </div>)
}