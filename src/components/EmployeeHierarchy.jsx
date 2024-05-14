// components/EmployeeHierarchy.js
import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeHierarchy = ({ hierarchy, onClick }) => {
  return (
    <div className="flex flex-col items-center">
      {Object.keys(hierarchy).map((key) => (
        <div key={key} className="mb-8">
          <EmployeeCard employee={hierarchy[key]} onClick={() => onClick(key)} />
          {hierarchy[key].departments && (
            <div className="ml-16">
              <EmployeeHierarchy hierarchy={hierarchy[key].departments} onClick={onClick} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmployeeHierarchy;
