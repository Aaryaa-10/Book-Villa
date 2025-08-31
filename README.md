# Book-Villa: Book Review Site (React + Vite)

A simple and interactive **React-based book review site** where users can explore trending books, read detailed reviews, and add their own reviews with book details and images. All reviews are stored locally using browser **Local Storage**.

---

## 🚀 Features
- Homepage with trending/current books  
- Detailed review page for each book  
- Add Review page with book details, image, and review form  
- Data stored in **Local Storage** (no backend required)  

---

## Project Structure
book-review-site/
|-- node_modules/ -> Auto-generated dependencies
|-- public/
| |-- images/ -> Book cover images and static assets
|-- src/
| |-- components/
| | |-- Home.jsx -> Homepage with trending books
| | |-- AddReview.jsx -> Add a new review form
| | |-- BookData.jsx -> Handles book data
| | |-- BookReview.jsx -> Detailed book review page
| | |-- App.jsx -> Root app component
| | |-- Main.jsx -> Entry point
| |
| |-- css/
| | |-- style.css -> Additional styles
|
|-- index.html -> Base HTML file
|-- package.json -> Dependencies & project scripts
|-- vite.config.js -> Vite configuration
|-- README.md -> Project documentation
|-- LICENSE
|-- .gitignore