import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/bookSlice';
import Navbar from './Navbar';
import '../components/style.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !category) {
      setError('All fields are required!');
      return;
    }

    dispatch(addBook({ title, author, category }));
    navigate('/browse'); // Redirect to Browse Books
  };

  return (
    <>
      <Navbar />
      <div className="add-book-container">
        <h2>Add a New Book</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
