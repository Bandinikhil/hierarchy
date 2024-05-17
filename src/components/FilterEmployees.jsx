import React, { useState } from 'react';
import data from '../data/data'; // Import your JSON data

const FilterEmployees = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Check if data is available in localStorage, otherwise use default data
    const jsonData = localStorage.getItem('organizationData');
    const orgData = jsonData ? JSON.parse(jsonData) : data;

    if (term.trim() === '') {
      setIsFiltering(false); // Reset filter if search term is empty
      onFilter(null); // No filtering, pass null
    } else {
      setIsFiltering(true);
      // Perform filtering on all employees (CEO, Head of Department, Team Leaders, Team Members)
      const filtered = filterEmployees(orgData, term);
      onFilter(filtered); // Pass the filtered data to the parent component
    }
  };

  const cancelFilter = () => {
    setIsFiltering(false);
    setSearchTerm('');
    onFilter(null); // Cancel the filter, pass null
  };

  return (
    <div className="text-center mt-5">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search Employee"
        className="md:px-3 px-2 py-1 md:py-2 w-[70%] md:w-1/3 lg:w-1/5 bg-gray-100 border border-gray-300 rounded-l-full focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={cancelFilter}
        className="md:px-3 px-2 py-1 md:py-2 bg-blue-500 border border-blue-500 rounded-r-full text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500 focus:outline-none focus:ring focus:border-blue-500"
      >
        Cancel
      </button>
    </div>
  );
};

// Function to filter employees based on search term
const filterEmployees = (orgData, term) => {
  const filteredEmployees = [];

  // Filter CEO's details
  if (matchesSearchTerm(orgData.CEO, term)) {
    filteredEmployees.push(orgData.CEO);
  }

  // Iterate through all departments
  for (const deptName in orgData.CEO.departments) {
    const department = orgData.CEO.departments[deptName];

    // Check Head of Department
    if (matchesSearchTerm(department, term)) {
      filteredEmployees.push(department);
    }

    // Check Team Leaders and Team Members
    department.teams.forEach((team) => {
      // Check Team Leader
      if (matchesSearchTerm(team.teamLeader, term)) {
        filteredEmployees.push(team.teamLeader);
      }

      // Check Team Members
      team.teamLeader.teamMembers.forEach((member) => {
        if (matchesSearchTerm(member, term)) {
          filteredEmployees.push(member);
        }
      });
    });
  }

  // Remove duplicates by filtering unique IDs
  return filteredEmployees.filter(
    (emp, index, self) => index === self.findIndex((e) => e.id === emp.id)
  );
};

// Helper function to check if value matches the search term
const matchesSearchTerm = (value, term) =>
  Object.values(value).some((v) =>
    v.toString().toLowerCase().includes(term.toLowerCase())
  );

export default FilterEmployees;

