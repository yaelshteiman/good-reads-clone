import {useState} from "react"
import BookModal from "./BookModal";

const BookCard = ({ book, readingList, handleSelectList }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState(null);
    console.log(book);
    return (
        <>
            {
                book.map((item) => {

                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let author = item.volumeInfo.authors ? item.volumeInfo.authors[0] : null;
                    if(thumbnail!== undefined)
                    {
                        return (
                            <>
                                <div className="card" onClick={()=>{
                                    setShow(true);
                                    setBookItem(item);
                                    }}
                                >
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <h3 className="author">{author}</h3>
                                    </div>
                                </div>
                                <BookModal show={show} bookItem={bookItem} onClose={()=>setShow(false)} readingList={readingList} handleSelectList={handleSelectList}/>
                            </>
                        )
                    } else{
                        return null;
                    }

                })
            }

        </>
    )
}
export default BookCard;