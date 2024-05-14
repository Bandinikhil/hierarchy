// components/EditTeamForm.js
import React, { useState } from 'react';

const EditTeamForm = ({ teamName, existingTeamNames, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: teamName
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData.name);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Edit Team</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Team Name"
            className="border border-gray-300 px-2 py-1 mb-2"
            required
          />
          {existingTeamNames.includes(formData.name) && formData.name !== teamName && (
            <p className="text-red-500 text-sm mb-2">Team name already exists</p>
          )}
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Save Changes</button>
            <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTeamForm;
