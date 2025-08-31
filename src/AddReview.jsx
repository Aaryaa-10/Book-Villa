import { useState, useEffect } from "react";
const AddReview = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState(null);
  const [genre, setGenre] = useState(null);
  const [reviews, setReviews] = useState([]);
// Load existing reviews from localStorage on page load
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("bookReviews")) || [];
    setReviews(savedReviews);
  }, []);
 // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };
// Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookName || !review || !authorName || genre) {
      alert("Please fill in all fields");
      return;
    }
   const newReview = {
      id: Date.now(),
      bookName,
      authorName,
      genre,
      review,
      image,
    };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("bookReviews", JSON.stringify(updatedReviews));
   // Clear form
    setBookName("");
    setAuthorName("");
    setGenre("");
    setReview("");
    setImage(null);
    alert("Book review submitted!");
  };
  const handleDelete =(id)=>{
    const updatedReviews = reviews.filter(review => review.id !==id);
    setReviews(updatedReviews);
    localStorage.setItem("bookReviews", JSON.stringify(updatedReviews));
  };
 return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Add a Book Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
         <input
          type="text"
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <select  onChange={(e) => setGenre(e.target.value)} value={genre}>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Science-Fiction">Science-Fiction</option>
           <option value="Self-Help">Self-Help</option>
           
        </select>
       
        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <div style={{ margin: "10px 0" }}>
            <img
              src={image}
              alt="Preview"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
        <button type="submit" style={{ padding: "10px 15px", marginTop: "10px" }}>
          Submit Review
        </button>
      </form>

      <h3 style={{ marginTop: "30px" }}>Submitted Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((r) => (
          <div
            key={r.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            {r.image && (
              <img
                src={r.image}
                alt={r.bookName}
                style={{ maxWidth: "100px", display: "block", marginBottom: "8px" }}
              />
            )}
            <strong>{r.bookName}</strong>
            <p>{r.authorName}</p>
            <p>{r.review}</p>
            <button onClick={()=>handleDelete(r.id)} 
            style={{backgroundColor:"red", color:"white", padding:"5px", cursor:"pointer"}}>
            Delete Review</button>
          </div>
        ))
      )}
    </div>
  );
};

export default AddReview;
