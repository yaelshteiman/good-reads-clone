import './App.css';
import NavBar from "./components/NavBar";
import BookSearch from "./components/BookSearch";
import {useState} from "react";
import Bookshelves from "./components/Bookshelves";

function App() {
    const [readingList, setReadingList] = useState({
        "Currently Reading": [],
        "Want to Read": [],
        "Read": []
    });

    return (
        <div className="App">
            <NavBar/>
            <div className="app-container">
                <BookSearch readingList={readingList} setReadingList={setReadingList} />
                <Bookshelves readingList={readingList}/>
            </div>

        </div>
    );
}

export default App;
