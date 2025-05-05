
const Bookshelves = ({readingList}) => {
    return (
        <div id="bookshelves" className="bookshelves">
            <div className="shelf-container">
                <h3>Bookshelves</h3>

                {Object.entries(readingList).map(([shelfName, books]) => (
                    <div key={shelfName} className="shelf-selection">
                        <div className="shelf-count">
                            {books.length}
                        </div>
                        <div className="shelf-name">
                            {shelfName}
                        </div>
                        {/*<div>*/}
                        {/*    {books.length} {shelfName}*/}
                        {/*</div>*/}
                        {/*{books.length === 0 ? (*/}
                        {/*    <p>No books in this shelf.</p>*/}
                        {/*) : (*/}
                        {/*    <ul className="book-list">*/}
                        {/*        {books.map((book) => (*/}
                        {/*            <li key={book.id} className="book-item">*/}
                        {/*                <h4>{book.volumeInfo.title}</h4>*/}
                        {/*                <h4>{book.volumeInfo.authors?.join(", ")}</h4>*/}
                        {/*            </li>*/}
                        {/*        ))}*/}
                        {/*    </ul>*/}
                        {/*)}*/}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Bookshelves;