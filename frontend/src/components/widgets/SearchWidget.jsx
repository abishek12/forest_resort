import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { IoSearchOutline } from "react-icons/io5";

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
    <div>
      <form onSubmit={handleSearch}
            className="tw-w-[299px] tw-h-[44px] relative">
        <div className="relative">
          <input 
          type="search"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          name="text"
          className="w-full tw-p-4 tw-rounded-full tw-bg-white tw-border-[#41E3EB] tw-border-[3px]"
          autoComplete="off"
          required />
          <button type="submit" className="absolute tw-bg-[#02952A] tw-rounded-full tw-right-10 tw-top-1 -translate-y-1/2 p-2 ">
          <IoSearchOutline />
          </button>
        </div>
      </form>

    </div>
  );
};

export default SearchWidget;
