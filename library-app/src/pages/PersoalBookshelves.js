import {Header} from "../components/Header/Header";
import {Bookshelves} from "../components/Bookshelves/Bookshelves";
import {LibraryNavigator} from "../components/LibraryNavigator/LibraryNavigator";

export const PersoalBookshelves = ({linkToSearch, books, setBooksCallback}) => {
    return (<div className="list-books">
        <Header breadcrumb={"Personal Bookshelves"}/>
        <Bookshelves books={books} setBooksCallback={setBooksCallback}/>
        <LibraryNavigator linkToSearch={linkToSearch}/>
    </div>)
}