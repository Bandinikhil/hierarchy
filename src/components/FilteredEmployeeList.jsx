import React from "react";

const FilteredEmployeeList = ({ filteredData }) => {
  // To show the list of Filtered Employees
  return (
    <div className="filtered-employee-list p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filtered Employees</h2>
      {filteredData?.map((employee) => (
        <div key={employee.id} className="border-b border-gray-200 pb-4 mb-4">
          <p className="text-lg font-medium text-gray-800">
            Name: {employee.name}
          </p>
          <p className="text-sm text-gray-600">Position: {employee.position}</p>
          <p className="text-sm text-gray-600">Phone: {employee.phone}</p>
          <p className="text-sm text-gray-600">Email: {employee.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FilteredEmployeeList;
