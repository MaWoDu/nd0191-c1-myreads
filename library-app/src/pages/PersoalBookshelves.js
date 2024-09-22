import {Header} from "../components/Header/Header";
import {Bookshelves} from "../components/Bookshelves/Bookshelves";
import {LibraryNavigator} from "../components/LibraryNavigator/LibraryNavigator";

export const PersoalBookshelves = ({onNav}) => {
    return (<div className="list-books">
        <Header breadcrumb={"Personal Bookshelves"}/>
        <Bookshelves/>
        <LibraryNavigator onClickAction={() => onNav()}/>
    </div>)
}