import { useNavigate } from 'react-router-dom';

function Book({ bookDetails }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/book/${bookDetails.id}`);
  };

  return (
    <div className="book-card">
      <img src={bookDetails.image} alt="" width="200px" height="150px" className="book-cover"/>
      <div className="book-details">
        <h2 className="book-title">{bookDetails.title}</h2>
        <p className="book-author">Author: {bookDetails.author}</p>
        <button className="card-btn" onClick={handleViewDetails}>View Details</button>
      </div>
    </div>
  );
}

export default Book;
