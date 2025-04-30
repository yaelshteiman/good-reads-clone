
// const shelves = ['Want to read', 'Currently reading', 'Read'];


// import {useState} from "react";

const BookShelfModal = ({getCurrentListForBook, dropdownVisible, setDropdownVisible, showBookShelve, onClose, bookItem, readingList, setReadingList}) => {

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
        setDropdownVisible(false);
        onClose();
    }



    return (
        <div className="bookshelf-overlay">
            <div className="bookshelf-modal">
                {/*<button onClick={() => setDropdownVisible(true)}>*/}
                {/*    Add to List*/}
                {/*</button>*/}
                {/*<h3>Choose a shelf for this book</h3>*/}
                {dropdownVisible && (
                    <select
                        onChange={(e) => {
                            handleSelectList(bookItem, e.target.value);
                        }}
                        value={getCurrentListForBook(bookItem)}
                    >
                        <option value="Read">Read</option>
                        <option value="Currently Reading">Currently Reading</option>
                        <option value="Want to Read">Want to Read</option>

                    </select>
                )}
            </div>
        </div>
    )
}

export default BookShelfModal;