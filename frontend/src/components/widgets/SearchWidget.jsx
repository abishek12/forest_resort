import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";

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
    event.target.reset();
  };

  return (
    <div className="sidebar-item search">
      <div className="sidebar-info">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter Keyword"
            value={query}
            onChange={handleChange}
            name="text"
            className="form-control"
            autoComplete="off"
            required
          />
          <button type="submit">
            <i className="fa-solid fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchWidget;
