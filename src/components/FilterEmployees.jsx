// components/FilterEmployees.js
import React, { useState } from 'react';

const FilterEmployees = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by Name, Phone Number, or Email"
        className="border border-gray-300 px-2 py-1 w-full"
      />
    </div>
  );
};

export default FilterEmployees;
