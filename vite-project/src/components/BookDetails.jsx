// BookDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { Books } from '../utils/mockData';



function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = Books.find((b) => b.id.toString() === id);

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="book-details-container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <button onClick={() => navigate('/')}>Close</button>
      <img src={book.image} alt={book.title} className="book-cover-large" />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Category:</strong> {book.category}</p>
    </div>
  );
}
export default BookDetails;