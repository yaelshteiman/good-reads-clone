import './App.css';
import NavBar from "./components/NavBar";
import BookSearch from "./components/BookSearch";
import {useState, useEffect} from "react";
import Bookshelves from "./components/Bookshelves";
import ShelfPage from "./components/ShelfPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

    const [readingList, setReadingList] = useState(() => {
        const stored = localStorage.getItem("readingList");
        return stored ? JSON.parse(stored) : {
            "Currently Reading": [],
            "Want to Read": [],
            "Read": [],
        };
    });

    useEffect(() => {
        localStorage.setItem("readingList", JSON.stringify(readingList));
    }, [readingList]);

    return (
        <Router>
            <div className="App">
                <NavBar/>
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={
                           <>
                               <BookSearch readingList={readingList} setReadingList={setReadingList} />
                               <Bookshelves readingList={readingList}/>
                           </>
                        }/>
                        <Route
                            path="/list/:shelfName"
                            element={<ShelfPage readingList={readingList} />}
                        />
                    </Routes>

                </div>

            </div>
        </Router>

    );
}

export default App;
