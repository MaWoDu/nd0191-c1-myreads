import "./App.css";
import {useState} from "react";
import {Bookshelves} from "./components/Bookshelves/Bookshelves";
import {Header} from "./components/Header/Header";
import {LibraryNavigator} from "./components/LibraryNavigator/LibraryNavigator";
import {LibrarySearch} from "./components/LibrarySearch/LibrarySearch";

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
          <LibrarySearch onCloseSearch={() => togglePages()}/>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <Header breadcrumb={"Personal Bookshelves"}/>
          <Bookshelves />
          <LibraryNavigator onClickAction={() => togglePages()}/>
        </div>
      )}
    </div>
  );
}

export default App;
