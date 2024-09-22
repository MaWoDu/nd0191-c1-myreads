import "./App.css";
import {useState} from "react";
import {PersoalBookshelves} from "./pages/PersoalBookshelves";
import {GlobalLibrary} from "./pages/GlobalLibrary";

function App() {
    const [showSearchPage, setShowSearchpage] = useState(false);

    const togglePages = () => {
        return setShowSearchpage(!showSearchPage)
    }

    return (
        <div className="app">
            {showSearchPage ? (
                <GlobalLibrary onNav={togglePages}/>
            ) : (
                <PersoalBookshelves onNav={togglePages}/>
            )}
        </div>
    );
}

export default App;
