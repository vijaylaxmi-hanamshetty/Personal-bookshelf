import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ query, setQuery, handleSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Personal Bookshelf
      </p>
      <div className="flex w-full max-w-xl space-x-2 relative">
        <div className="relative w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for a book"
            className="px-4 py-3 border border-gray-300 bg-white rounded-md w-full focus:outline-blue-200 shadow-md pl-10"
          />
          <div className="absolute left-0 top-0 flex items-center pl-3 h-full">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Link
          to="/bookshelf"
          className="px-6 py-2 bg-blue-500 text-white  rounded-md "
        >
          Here is the added books
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
