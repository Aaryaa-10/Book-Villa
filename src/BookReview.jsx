import { useParams } from "react-router-dom";
import BookData from "./BookData";
//fetching book details in home page
export default function BookReview() {
  const { id } = useParams();
  const book = BookData.find(b => b.id === parseInt(id));
  

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="single-book">
      <h1 className="bname">{book.name}</h1>
      
     <img  id="cover"src={`/images/${book.image}`} alt={book.name} className="imagebox" />
      <h3 className="bdetails">Author: {book.author}</h3>
      <p className="bdetails">Genre: {book.genre}</p>
     
     <p className="bdetails">Rating: {book.rating}</p>
      <div className="box">
      
      <h2 className="full">Full Review</h2>

      <p className="review">{book.fullReview}</p>
      </div>
    </div>
  );
}
