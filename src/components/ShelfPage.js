import { useParams } from "react-router-dom";

const ShelfPage = ({ readingList, handleSelectList}) => {
    const { shelfName } = useParams(); // Extract shelfName from the object returned by useParams
    const books = readingList[shelfName] || []; // Use shelfName directly

    return (
        <div id="shelfPage" className="shelf-page">
            <h2>{shelfName} {books.length === 0 ? ("") : (`(${books.length})`)}</h2>
            {books.length === 0 ? (
                <p>No books in this shelf.</p>
            ) : (
                <table className="books-table">
                    <thead>
                        <tr className="table-list">
                            <th>#</th>
                            <th>cover</th>
                            <th>title</th>
                            <th>author</th>
                        </tr>
                    </thead>
                    <tbody className="books-body">
                    {books.map((book, index) => (
                        <tr key={book.id} className="book-a-like">
                            <td className="field-position">{index+1}</td>
                            <td className="field-cover">
                                <img
                                    src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}
                                    alt=""
                                />
                            </td>
                            <td className="field-title">{book.volumeInfo.title}</td>
                            <td className="field-author">{book.volumeInfo.authors?.join(", ")}</td>
                            <td className="field-action">
                                <button className="delete-book-a-like" onClick={() => {
                                    const confirmed = window.confirm(`Are you sure you want to remove ${book.volumeInfo.title} from your books? This will permanently remove this book from your shelves.`)
                                    if (confirmed) {
                                        handleSelectList(book, null);
                                    }
                                }}>
                                    <i className="fa-duotone fa-solid fa-xmark"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ShelfPage;
