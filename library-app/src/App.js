import "./App.css";

import {PersoalBookshelves} from "./pages/PersoalBookshelves";
import {GlobalLibrary} from "./pages/GlobalLibrary";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAll} from "./BooksAPI";

function App() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function fetchData() {
            return await getAll();
        }

        fetchData().then(booksResult => setBooks(booksResult))
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={
                    <PersoalBookshelves
                        linkToSearch={"/search"}
                        books={books}
                        setBooksCallback={setBooks}/>
                }/>
                <Route path="/search" element={
                    <GlobalLibrary
                        linkToHome={"/"}
                        booksInPersonalLibrary={books}/>
                }/>
            </Routes>
        </div>
    );
}

export default App;
