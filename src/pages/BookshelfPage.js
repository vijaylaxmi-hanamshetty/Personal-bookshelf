
import React from 'react';
import Bookshelf from '../components/Bookshelf';
import { Link } from 'react-router-dom';

const BookshelfPage = ({ bookshelf, deleteFromBookshelf }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-9 mt-8 mb-4 py-3">
        <h2 className="text-3xl md:text-5xl font-medium">My Bookshelf</h2>
        <Link to="/" className="px-4 py-2 bg-green-500 text-white rounded-md">
          Back to Search
        </Link>
      </div>
      <Bookshelf
        books={bookshelf}
        actionLabel="Delete"
        onAction={(book) => deleteFromBookshelf(book.key)}
      />
    </div>
  );
};

export default BookshelfPage;
