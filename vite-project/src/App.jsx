import { Routes, Route } from 'react-router-dom'; 
import { useState } from 'react';
import BookList from './components/BookList';
import { Books } from './utils/mockData';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import AddBook from './components/AddBook';
import NotFound from './components/NotFound';

import "./components/style.css";

function App() {
  const [searchText, setSearchText] = useState(""); 
  const [filteredBooks, setFilteredBooks] = useState(Books); 

  function handleSearch() {
    const filtered = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) 
    );
    setFilteredBooks(filtered); 
  }

  return (
    <>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />  

       
        <Route path="/browse" element={<BrowseBooks />} />  

        <Route path="/add-book" element={<AddBook />} />  {/* AddBook Route */}

       
        <Route path="/book/:id" element={<BookDetails />} />  

        <Route path="*" element={<NotFound />} />  {/* 404 Page */}
      </Routes>
    </>
  );
}

export default App;
