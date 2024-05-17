import React, { useState } from "react";
import { useSelector } from "react-redux";
import CEO from "./components/CEO";
import FilterEmployees from "./components/FilterEmployees";
import FilteredEmployeeList from "./components/FilteredEmployeeList";

function App() {
  const data = useSelector((state) => state.organization);
  const [filteredData, setFilteredData] = useState(null);

  const handleFilter = (filteredData) => {
    setFilteredData(filteredData);
  };

  // conditional rendering if the filtered data is available then the filtered data will be rendered orelse all the Hierarchial data will be rendered with all the functionalaties
  return (
    <div className="App">
      <h1 className="text-center my-2 font-bold text-3xl">Organization Tree</h1>
      <FilterEmployees onFilter={handleFilter} />
      {filteredData ? (
        <FilteredEmployeeList filteredData={filteredData} />
      ) : data ? (
        <CEO data={data.CEO} />
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default App;
