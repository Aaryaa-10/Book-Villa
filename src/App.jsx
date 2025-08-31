import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Next from "./Next";
import BookReview from "./BookReview";
import AddReview from "./AddReview";
export default function App() {
  return (
    //Routing All the Pages 
    <Router><NavBar />
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/next" element={<Next />} />
        <Route path="/book/:id" element={<BookReview />} />
        <Route path="/add-review" element={<AddReview />} />
        </Routes>
         </Router>
  );
}
