// src/components/SearchBar.jsx

import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)} 
        />
    );
};

export default SearchBar;
