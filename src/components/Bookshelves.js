
const Bookshelves = ({readingList}) => {
    return (
        <div id="bookshelves" className="bookshelves">
            {Object.entries(readingList).map(([shelfName, books]) => (
                <div key={shelfName} className="shelf-selction">
                    <h2>{shelfName}</h2>
                    {books.length === 0 ? (
                        <p>No books in this shelf.</p>
                    ) : (
                        <ul className="book-list">
                            {books.map((book) => (
                                <li key={book.id} className="book-item">
                                    <h4>{book.volumeInfo.title}</h4>
                                    <h4>{book.volumeInfo.authors?.join(", ")}</h4>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Bookshelves;