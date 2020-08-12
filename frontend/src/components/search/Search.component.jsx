import React from 'react';

const Search = ({ handleSearch }) => {
  const handleInputChange = e => {
    const searchInput = e.target.value;
    handleSearch(searchInput);
  };

  return (
    <div className='search'>
      <input placeholder='Search...' type='text' onChange={handleInputChange} />
    </div>
  );
};

export default Search;
