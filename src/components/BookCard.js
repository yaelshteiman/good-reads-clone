import react, {useState} from "react"

const BookCard = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState(null);
    console.log(book);
    return (
        <>
            {
                book.map((item) => {

                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if(thumbnail!== undefined)
                    {
                        return (
                            <>
                                <div className="card" onClick={()=>{setShow(true);setBookItem(item)}}>
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        #TODO: NEED TO FIX THIS
                                        <h3 className="author">{item.volumeInfo.authors[0]}</h3>
                                    </div>
                                </div>
                                {/*<Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>*/}
                            </>
                        )
                    }

                })
            }

        </>
    )
}
export default BookCard;