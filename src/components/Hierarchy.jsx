// components/Hierarchy.js
import React from 'react';

const Hierarchy = ({ data, onEditTeam }) => {
  const renderTeam = (team, department) => {
    return (
      <div key={team.id} className="ml-8">
        <div className="text-lg font-semibold">{team.name}</div>
        <div className="ml-4">
          <button onClick={() => onEditTeam({ ...team, department })} className="text-sm text-blue-500 underline">Edit Team</button>
        </div>
      </div>
    );
  };

  const renderDepartment = (department) => {
    return (
      <div key={department.position} className="mb-8">
        <div className="text-xl font-bold">{department.position}</div>
        <div className="ml-4">
          {Object.values(department.teams).map(team => renderTeam(team, department.position))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {Object.values(data).map(department => renderDepartment(department))}
    </div>
  );
};

export default Hierarchy;
