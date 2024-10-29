// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchDate, setSearchDate, updateFilteredData }) => {
  const handleSearch = () => {
    updateFilteredData(searchDate);
  };

  return (
    <div>
      <input 
        type="date" 
        value={searchDate} 
        onChange={(e) => setSearchDate(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
