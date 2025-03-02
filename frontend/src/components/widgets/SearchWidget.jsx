import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { IoSearchOutline } from "react-icons/io5";
import "../../assets/css/SearchWidget.css";

const SearchWidget = ({ setSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const debouncedSearch = debounce((searchTerm) => {
      setSearch(searchTerm);
    }, 500);

    debouncedSearch(query);

    return () => {
      debouncedSearch.cancel();
    };
  }, [query, setSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(query);
  };

  const handleIconClick = () => {
    setSearch(query);
  };

  return (
    <div className="container-fluid p-0">
      <form onSubmit={handleSearch} className="w-100">
        <div className="row g-0 align-items-center">
          {/* Input Field with Icon */}
          <div className="col-12 position-relative">
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={handleChange}
              name="text"
              className="form-control search-input"
              autoComplete="off"
              required
            />
            {/* Search Icon (Clickable and Aligned to Right) */}
            <div className="search-icon-container" onClick={handleIconClick}>
              <IoSearchOutline className="search-icon" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchWidget;
