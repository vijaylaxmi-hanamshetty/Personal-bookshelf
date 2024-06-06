import React from "react";
import BookCard from "./BookCard";

const Bookshelf = ({ books, actionLabel, onAction }) => {
  return (
    <div className=" px-40 py-10">
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {books.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            actionLabel={actionLabel}
            onAction={onAction}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
