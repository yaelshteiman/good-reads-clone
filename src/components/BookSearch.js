import {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from "axios";
import BookCard from "./BookCard";

const BookSearch = () => {

    const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);

    const searchBook =(evt) => {
        if (evt.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key='+API_KEY)
                .then(res => setBookData(res.data.items))
                .catch(err => console.log(err));
        }
    }

    return (
        <div id="bookSearch">
            <div className="book-search-header">
                <h2>Find Your Book</h2>
                <div className="search-book">
                    <input
                        type="text"
                        placeholder="Search books"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={searchBook}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="container">
                <BookCard book={bookData} />
            </div>
        </div>
    )
}

export default BookSearch;