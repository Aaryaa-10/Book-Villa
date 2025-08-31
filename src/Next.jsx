import './css/style.css';
import BookData from './BookData';
import {Link} from 'react-router-dom';
export default function  Next(){
    const details2 = BookData.slice(6);
    return(
        <div className='container'>
            <h2 className='title'>Current Top Picks</h2>
            <div className="bookList">
            {
                details2.map((book)=>(
                    <div className="bookBox" key={book.id}>
                        <h3 className="btitle">Name:{book.name}</h3>
                        <div className='.imagebox'>
                            <img src={`/images/${book.image}`} alt={book.id} />
                        </div>
                        <h3 className="bauthor">Author:{book.author}</h3>
                        <h3 className="bgenre">Genre:{book.genre}</h3>
                        <h3 className="bgenre">Rating:{book.rating}</h3>
                        <p className="bgenre">Synopsis:{book.synopsis}</p>
                        <Link to={`/book/${book.id}`}>
                         <button className="breview">Read Review</button>
                         </Link>
                        </div>
                        )
                    )
            }
            </div>
        </div>
    )

}