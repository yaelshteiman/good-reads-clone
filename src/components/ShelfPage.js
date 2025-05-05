import { useParams } from "react-router-dom";

const ShelfPage = ({ readingList }) => {
    const { shelfName } = useParams(); // Extract shelfName from the object returned by useParams
    const books = readingList[shelfName] || []; // Use shelfName directly

    return (
        <div id="shelfPage" className="shelf-page">
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
    );
};

export default ShelfPage;
