import {useState, useEffect} from "react";


const BookshelfModal = ({readingList, isShelfSelectorOpen, getCurrentListForBook, setIsShelfSelectorOpen, onClose, bookItem, handleSelectList}) => {
    const [selectedShelf, setSelectedShelf] = useState(getCurrentListForBook(bookItem));

    useEffect(() => {
        setSelectedShelf(getCurrentListForBook(bookItem));
    }, [bookItem, readingList, getCurrentListForBook]);

    const handleSave = () => {
        handleSelectList(bookItem, selectedShelf);
        setIsShelfSelectorOpen(false);
        onClose();
    }

    if (!isShelfSelectorOpen){
        return;
    }

    const handleRemove = () => {
        handleSelectList(bookItem, null);
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
                    <button className="remove" onClick={handleRemove}>
                        <i className="fa-regular fa-trash-can"></i>
                        Remove from shelf
                    </button>
                </ul>

            </div>
        </div>
    )
}

export default BookshelfModal;