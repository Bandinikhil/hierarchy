import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CEO from './components/CEO';
import FilterEmployees from './components/FilterEmployees';
import FilteredEmployeeList from './components/FilteredEmployeeList';

function App() {
  const data = useSelector(state => state.organization);
  const [filteredData, setFilteredData] = useState(null);

  const handleFilter = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <div className="App">
      <FilterEmployees onFilter={handleFilter} />
      {filteredData ? (
        <FilteredEmployeeList filteredData={filteredData} />
      ) : (
        data ? (
          <CEO data={data.CEO} />
        ) : (
          <div className="text-center">Loading...</div>
        )
      )}
    </div>
  );
}

export default App;

