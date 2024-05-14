// components/EditEmployeeForm.js
import React, { useState } from 'react';

const EditEmployeeForm = ({ employee, teams, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: employee.name,
    id: employee.id,
    phone: employee.phone,
    email: employee.email,
    position: employee.position,
    teamId: employee.teamId
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="border border-gray-300 p-4 rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">Edit Employee</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border border-gray-300 px-2 py-1 mb-2 block w-full"
        required
      />
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
        className="border border-gray-300 px-2 py-1 mb-2 block w-full"
        required
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="border border-gray-300 px-2 py-1 mb-2 block w-full"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border border-gray-300 px-2 py-1 mb-2 block w-full"
        required
      />
      <select
        name="position"
        value={formData.position}
        onChange={handleChange}
        className="border border-gray-300 px-2 py-1 mb-2 block w-full"
        required
      >
        <option value="">Select Position</option>
        <option value="Team Leader">Team Leader</option>
        <option value="Team Member">Team Member</option>
      </select>
      <select
        name="teamId"
        value={formData.teamId}
        onChange={handleChange}
        className="border border-gray-300 px-2 py-1 mb-2 block w-full"
        required
      >
        <option value="">Select Team</option>
        {teams.map(team => (
          <option key={team.id} value={team.id}>{team.name}</option>
        ))}
      </select>
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
        <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default EditEmployeeForm;
