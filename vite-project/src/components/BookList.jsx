import React from 'react';
import Book from './Book';
import '../components/style.css';

function BookList({ booksData }) {
  return (
    <div className="book-list">
      {booksData.map((book) => (
        <Book key={book.id} bookDetails={book} />
      ))}
    </div>
  );
}

export default BookList;
