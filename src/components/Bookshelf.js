import React from "react";
import BookCard from "./BookCard";

const Bookshelf = ({ books, actionLabel, onAction }) => {
  return (
    <div className="  px-4 md:px-20 lg:px-30 py-10">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
