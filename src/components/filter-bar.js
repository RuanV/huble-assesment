// FilterBar.js

import React, { useState, useEffect } from "react";

const FilterBar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Your useEffect logic here, if needed
    // Make sure to include searchTerm if it's used inside this block
  }, [searchTerm]);
  return (
    <div className="content__body code-snippet" style={{ margin: "60px" }}>
      <label htmlFor="search">Search by Name:</label>
      <div className="wrap">
        <div className="search" style={{ margin: "20px" }}>
          <input
            type="text"
            className="searchTerm"
            placeholder="Name?"
            style={{ width: "900px" }}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onSearchChange(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
