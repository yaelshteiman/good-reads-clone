import {useState, useEffect} from "react";


const BookShelfModal = ({readingList, dropdownVisible, getCurrentListForBook, setDropdownVisible, onClose, bookItem, setReadingList}) => {
    const [selectedShelf, setSelectedShelf] = useState(getCurrentListForBook(bookItem));

    useEffect(() => {
        setSelectedShelf(getCurrentListForBook(bookItem));
    }, [bookItem, readingList]);


    const handleSelectList = (book, selectedList) => {
        setReadingList((prev) => {
            const updated = { ...prev };
            // Remove book from all shelves
            for (let shelf in updated) {
                updated[shelf] = updated[shelf].filter((b) => b.id !== book.id);
            }
            // Add book to selected shelf
            updated[selectedList] = [...updated[selectedList], book];

            return updated;
        });
    }

    const handleSave = () => {
        handleSelectList(bookItem, selectedShelf);
        setDropdownVisible(false);
        onClose();
    }

    if (!dropdownVisible){
        return;
    }

    return (
        <div className="bookshelf-overlay">
            <div className="bookshelf-modal">
                <select
                    value={selectedShelf}
                    onChange={(e) => setSelectedShelf(e.target.value)}
                >
                    <option value="Currently Reading">Currently Reading</option>
                    <option value="Read">Read</option>
                    <option value="Want to Read">Want to Read</option>
                </select>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default BookShelfModal;