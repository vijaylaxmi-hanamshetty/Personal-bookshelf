
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './index.css'; 

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    if (!bookshelf.some((item) => item.key === book.key)) {
      const newBookshelf = [...bookshelf, book];
      localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
      setBookshelf(newBookshelf);
    } else {
      alert('This book is already in your bookshelf.');
    }
  };

  const deleteFromBookshelf = (key) => {
    const newBookshelf = bookshelf.filter((book) => book.key !== key);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    setBookshelf(newBookshelf);
  };

  return (
    <Router>
      <div className="bg-fixed bg-cover bg-center min-h-screen flex flex-col bg-gray-100" >
        <Routes>
          <Route 
            path="/" 
            element={<SearchPage addToBookshelf={addToBookshelf} />} 
          />
          <Route 
            path="/bookshelf" 
            element={<BookshelfPage bookshelf={bookshelf} deleteFromBookshelf={deleteFromBookshelf} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
