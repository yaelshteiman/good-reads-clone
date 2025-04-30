// import react from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BookShelfModal from "./BookShelfModal";
import {useState} from "react";


const BookModal = ({show, bookItem, onClose, readingList, setReadingList}) => {

    const [showBookShelve, setShowBookShelve] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const getCurrentListForBook = (book) => {
        if (readingList["Currently Reading"].includes(book)){
            return "Currently Reading";
        } else if (readingList["Read"].includes(book)) {
            return "Read";
        } else if (readingList["Want to Read"].includes(book)){
            return "Want to Read";
        } else{
            return null;
        }
    }

    if (!show){
        return null;
    }
    let book_status = getCurrentListForBook(bookItem);
    let thumbnail=bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail;
    return (
        <>
            <div className="overlay" >
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div className="inner-box">
                        <img src={thumbnail} alt=""/>
                        <div className="info">
                            <h1>{bookItem.volumeInfo.title}</h1>
                            <h3>{bookItem.volumeInfo.authors}</h3>
                            <a
                                href={bookItem.volumeInfo.previewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>Show more</button>
                            </a>
                            <button onClick={() => {
                                setShowBookShelve(true)
                                setDropdownVisible(true)
                            }}>
                                {/*Add to bookshelf*/}
                                {book_status ? book_status : "Add to bookshelf"}
                            </button>
                        </div>
                    </div>
                    {showBookShelve && (
                        <BookShelfModal
                            getCurrentListForBook={getCurrentListForBook}
                            dropdownVisible={dropdownVisible}
                            setDropdownVisible={setDropdownVisible}
                            showBookShelve={showBookShelve}
                            onClose={() => setShowBookShelve(false)}
                            bookItem={bookItem}
                            readingList={readingList}
                            setReadingList={setReadingList}
                        />
                    )}
                    <p className="description">{bookItem.volumeInfo.description}</p>
                </div>

            </div>


        </>
    )
}

export default BookModal;