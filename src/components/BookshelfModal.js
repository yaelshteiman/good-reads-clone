import {useState, useEffect} from "react";


const BookshelfModal = ({readingList, isShelfSelectorOpen, getCurrentListForBook, setIsShelfSelectorOpen, onClose, bookItem, setReadingList}) => {
    const [selectedShelf, setSelectedShelf] = useState(getCurrentListForBook(bookItem));

    useEffect(() => {
        setSelectedShelf(getCurrentListForBook(bookItem));
    }, [bookItem, readingList]);


    const handleSelectList = (book, selectedList) => {
        setReadingList((prev) => {
            const updated = { ...prev };
            for (let shelf in updated) {
                updated[shelf] = updated[shelf].filter((b) => b.id !== book.id);
            }
            updated[selectedList] = [...updated[selectedList], book];

            return updated;
        });
    }

    const handleSave = () => {
        handleSelectList(bookItem, selectedShelf);
        setIsShelfSelectorOpen(false);
        onClose();
    }

    if (!isShelfSelectorOpen){
        return;
    }

    return (
        <div className="bookshelf-overlay">
            <div className="bookshelf-modal">
                <button className="close" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h3>Choose a shelf for this book</h3>
                <ul>
                    {["Currently Reading", "Read", "Want to Read"].map((shelf) => (
                        <li
                            className={`shelf-option ${selectedShelf === shelf ? "selected" : ""}`}
                            key={shelf}
                            onClick={() => {
                                setSelectedShelf(shelf);

                            }}
                        >
                            {shelf}
                        </li>
                    ))}
                    <button className="save" onClick={handleSave}>Save</button>

                </ul>
                {/*<button className="remove" onClick={}>*/}

                {/*</button>*/}
            </div>
        </div>
    )
}

export default BookshelfModal;