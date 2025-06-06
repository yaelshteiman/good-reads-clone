import {Link} from "react-router-dom";


const Bookshelves = ({readingList}) => {
    return (
        <div id="bookshelves" className="bookshelves">
            <div className="shelf-container">
                <h3>Bookshelves</h3>

                {Object.entries(readingList).map(([shelfName, books]) => (
                    <div key={shelfName} className="shelf-selection">
                        <Link to={`/list/${encodeURIComponent(shelfName)}`} className="shelf-count">
                            {books.length}
                        </Link>
                        <Link to={`/list/${encodeURIComponent(shelfName)}`} className="shelf-name">
                            {shelfName}
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Bookshelves;