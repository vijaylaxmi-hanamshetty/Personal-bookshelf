import React from "react";

const BookCard = ({ book, actionLabel, onAction }) => {
  const getCoverUrl = (cover_i) => {
    if (cover_i) {
      return `http://covers.openlibrary.org/b/id/${cover_i}-L.jpg`;
    } else {
      return "https://via.placeholder.com/128x192.png?text=No+Cover";
    }
  };

  const buttonClass = actionLabel === "Delete" ? "bg-red-500" : "bg-black";

  return (
    <div className="">
      <div className=" p-2 rounded-md border border-gray-300 shadow-lg  transition-transform transform hover:scale-105 bg-white  justify-between">
        <div>
          <img
            src={getCoverUrl(book.cover_i)}
            alt={book.title}
            className="object-cover  h-40 w-full  "
          />
          <h3 className="font-bold text-xl mt-2">{book.title}</h3>
          <p>Author(s): {book.author_name?.join(", ")}</p>
          <p>First Published: {book.first_publish_year}</p>
        </div>
        <button
          onClick={() => onAction(book)}
          className={`mt-2 px-4 py-2 ${buttonClass} container text-white rounded transition-transform transform active:scale-95`}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
