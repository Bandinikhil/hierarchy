// components/NewTeamForm.js
import React, { useState } from 'react';

const NewTeamForm = ({ onSubmit, onCancel }) => {
  const [teamName, setTeamName] = useState('');

  const handleChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(teamName);
    setTeamName('');
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Team</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={teamName}
            onChange={handleChange}
            placeholder="Team Name"
            className="border border-gray-300 px-2 py-1 mb-2"
            required
          />
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Add</button>
            <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTeamForm;
