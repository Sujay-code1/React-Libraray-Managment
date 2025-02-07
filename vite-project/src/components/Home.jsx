import React, { useState } from 'react';
import BookList from './BookList';
import { Books } from '../utils/mockData';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(Books);

  const handleSearch = () => {
    const filtered = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <div className="search">
        <h2>Search Books</h2>
        <div>
          <input
            type="text"
            placeholder="Search books..."
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <BookList booksData={filteredBooks} />
    </div>
  );
};

export default Home;
