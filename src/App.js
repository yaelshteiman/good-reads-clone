import './App.css';
import NavBar from "./components/NavBar";
import BookSearch from "./components/BookSearch";
import {useState, useEffect} from "react";
import Bookshelves from "./components/Bookshelves";
import ShelfPage from "./components/ShelfPage";
import {HashRouter as Router, Routes, Route} from "react-router-dom";


function App() {

    const [readingList, setReadingList] = useState(() => {
        const stored = localStorage.getItem("readingList");
        return stored ? JSON.parse(stored) : {
            "Want to Read": [],
            "Currently Reading": [],
            "Read": [],
        };
    });

    const handleSelectList = (book, selectedList) => {
        setReadingList((prev) => {
            const updated = { ...prev };
            for (let shelf in updated) {
                updated[shelf] = updated[shelf].filter((b) => b.id !== book.id);
            }
            if(selectedList){
                updated[selectedList] = [...updated[selectedList], book];

            }

            return updated;
        });
    }

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
                               <BookSearch readingList={readingList} setReadingList={setReadingList} handleSelectList={handleSelectList}/>
                               <Bookshelves readingList={readingList}/>
                           </>
                        }/>
                        <Route
                            path="/list/:shelfName"
                            element={<ShelfPage readingList={readingList} handleSelectList={handleSelectList}/>}
                        />
                    </Routes>

                </div>

            </div>
        </Router>

    );
}

export default App;
