import React from 'react';

const Search = ({ handleSearch, data = [], filterBy }) => {
  const handleInputChange = e => {
    const searchInput = e.target.value;

    const filteredData = searchInput
      ? data.filter(item => item[filterBy].toLowerCase().includes(searchInput.toLowerCase()))
      : data;

    handleSearch(filteredData);
  };

  return (
    <div className='search'>
      <input placeholder='Search...' type='text' onChange={handleInputChange} />
    </div>
  );
};

export default Search;
