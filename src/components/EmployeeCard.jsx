// components/EmployeeCard.js
import React from 'react';

const EmployeeCard = ({ employee, onClick }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300 cursor-pointer" onClick={onClick}>
      <h2 className="text-lg font-semibold mb-2">{employee.name}</h2>
      <p className="text-gray-600">{employee.position}</p>
    </div>
  );
};

export default EmployeeCard;
