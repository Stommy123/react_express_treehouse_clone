import React from 'react';

const Search = ({ handleSearch, data = [], queryProp }) => {
  const handleInputChange = e => {
    const query = e.target.value;
    const filteredData = query
      ? data.filter(item => item[queryProp].toLowerCase().includes(query.toLowerCase()))
      : data;
    handleSearch(filteredData);
  };
  return (
    <div className="search">
      <input placeholder="Search..." type="text" onChange={handleInputChange} />
    </div>
  );
};

export default Search;
