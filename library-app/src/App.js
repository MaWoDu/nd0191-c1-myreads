import "./App.css";

import {PersoalBookshelves} from "./pages/PersoalBookshelves";
import {GlobalLibrary} from "./pages/GlobalLibrary";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<PersoalBookshelves linkToSearch={"/search"}/>}/>
                <Route path="/search" element={<GlobalLibrary linkToHome={"/"}/>}/>
            </Routes>
        </div>
    );
}

export default App;
