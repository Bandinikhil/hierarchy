// components/TeamForm.js
import React, { useState } from 'react';

const TeamForm = ({ onSubmit, onCancel, team }) => {
  const [name, setName] = useState(team ? team.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="border border-gray-300 p-4 rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">{team ? 'Edit Team' : 'Add New Team'}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Team Name"
        className="border border-gray-300 px-2 py-1 mb-2 block w-full"
      />
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={handleCancel} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default TeamForm;
