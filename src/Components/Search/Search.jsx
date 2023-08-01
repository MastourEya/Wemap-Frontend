import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Recherche..." onChange={handleSearch} />
    </div>
  );
};

export default Search;
