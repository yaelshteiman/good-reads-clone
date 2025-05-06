// import react from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BookshelfModal from "./BookshelfModal";
import {useState} from "react";


const BookModal = ({show, bookItem, onClose, readingList, handleSelectList}) => {

    const [showBookShelve, setShowBookShelve] = useState(false);
    const [isShelfSelectorOpen, setIsShelfSelectorOpen] = useState(false);

    const getCurrentListForBook = (book) => {
        if (readingList["Currently Reading"].some(b => b.id === book.id)) {
            return "Currently Reading";
        } else if (readingList["Read"].some(b => b.id === book.id)) {
            return "Read";
        } else if (readingList["Want to Read"].some(b => b.id === book.id)) {
            return "Want to Read";
        }
        else {
            return null;
        }
    };

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
                                setIsShelfSelectorOpen(true)
                            }}>
                                {book_status ? book_status : "Add to bookshelf"}
                            </button>
                        </div>
                    </div>
                    {showBookShelve && (
                        <BookshelfModal
                            readingList={readingList}
                            isShelfSelectorOpen = {isShelfSelectorOpen}
                            getCurrentListForBook={getCurrentListForBook}
                            setIsShelfSelectorOpen={setIsShelfSelectorOpen  }
                            onClose={() => setShowBookShelve(false)}
                            bookItem={bookItem}
                            handleSelectList={handleSelectList}
                        />
                    )}
                    <p className="description">{bookItem.volumeInfo.description}</p>
                </div>

            </div>


        </>
    )
}

export default BookModal;