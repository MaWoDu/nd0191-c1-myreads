import "./App.css";
import { useState } from "react";
import {Bookshelves} from "./components/Bookshelves/Bookshelves";
import {Header} from "./components/Header/Header";
import {LibraryNavigator} from "./components/LibraryNavigator/LibraryNavigator";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const togglePages = () => {
    return setShowSearchpage(!showSearchPage)
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <Header breadcrumb={"Global Library"}/>
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => togglePages()}
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
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <Header breadcrumb={"Personal Library"}/>
          <Bookshelves />
          <LibraryNavigator onClickAction={() => togglePages()}/>
        </div>
      )}
    </div>
  );
}

export default App;
