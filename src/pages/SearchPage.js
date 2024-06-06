import React, { useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loding";

const SearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (query.length > 0) {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
        );
        setResults(res.data.docs);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  md:px-20 lg:px-40">
          {results.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              actionLabel="Add to Bookshelf"
              onAction={addToBookshelf}
              className=" "
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
