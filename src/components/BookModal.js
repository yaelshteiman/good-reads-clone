// import react from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const BookModal = ({show, bookItem, onClose}) => {
    if (!show){
        return null;
    }
    let thumbnail=bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail;
    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div className="inner-box">
                        <img src={thumbnail} alt=""/>
                        <div className="info">
                            <h1>{bookItem.volumeInfo.title}</h1>
                            <h3>{bookItem.volumeInfo.authors}</h3>
                            <a href={bookItem.volumeInfo.previewLink}><button>Show more</button></a>                        </div>
                    </div>
                    <p className="description">{bookItem.volumeInfo.description}</p>
                </div>
            </div>
        </>
    )
}

export default BookModal;