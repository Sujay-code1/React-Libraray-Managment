import React from 'react';
import { Link } from 'react-router-dom';
import '../components/style.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Book Library</h1>
      <div className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browse">Browse Books</Link></li>
          <li><Link to="/add-book">Add Books</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
