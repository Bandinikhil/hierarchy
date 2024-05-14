// components/EmployeeDetails.js
import React from 'react';

const EmployeeDetails = ({ employee }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300">
      <h2 className="text-lg font-semibold mb-2">{employee.name}</h2>
      <p className="text-gray-600 mb-1">{employee.position}</p>
      <p className="text-gray-600 mb-1">ID: {employee.id}</p>
      <p className="text-gray-600 mb-1">Phone: {employee.phone}</p>
      <p className="text-gray-600">Email: {employee.email}</p>
    </div>
  );
};

export default EmployeeDetails;
