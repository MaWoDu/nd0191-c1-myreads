import {Header} from "../components/Header/Header";
import {LibrarySearch} from "../components/LibrarySearch/LibrarySearch";
import {Library} from "../components/Library/Library";
import debounce from "lodash.debounce";
import {useCallback, useState} from "react";
import {search, update} from "../BooksAPI";
import {categories} from "../components/Bookshelves/Categories";
import {Bookshelf} from "../components/Bookshelves/Bookshelf";

export const GlobalLibrary = ({linkToHome}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([])

    const searchCallback = (updatedSearchTerm) => {
        setSearchTerm(updatedSearchTerm)
        apiSearch(updatedSearchTerm)
    }

    const apiSearch = useCallback(
        debounce(async (searchTerm) => {
            let searchResults = await search(searchTerm, 1); // fixme: maxResults value is ignored
            setBooks(searchResults)
        }, 300),
        []
    );

    const moveBook = async (title, currentBookshelf, updatedBookshelf) => {
        console.log("move " + title + " from " + currentBookshelf + " to " + updatedBookshelf)
        const unchangedBooks = books.filter(b => b.title !== title)
        const bookToUpdate = books.filter(b => b.title === title).at(0)
        await update(bookToUpdate, updatedBookshelf)
        bookToUpdate.shelf = updatedBookshelf
        setBooks([...unchangedBooks, bookToUpdate])
    }

    return (<div className="search-books">
        <Header breadcrumb={"Global Library"}/>
        <LibrarySearch linkToHome={linkToHome} searchTerm={searchTerm} search={searchCallback}/>
        { books ? <Library books={books} moveBook={moveBook}/> : "" }
    </div>)
}