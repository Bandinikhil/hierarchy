// components/FilterBar.js
import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search employees by name, phone, or email"
        className="border border-gray-300 px-4 py-2 w-full"
      />
    </div>
  );
};

export default FilterBar;
