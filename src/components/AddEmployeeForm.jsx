// components/AddEmployeeForm.js
import React, { useState } from 'react';

const AddEmployeeForm = ({ teams, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    phone: '',
    email: '',
    position: '',
    teamId: ''
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
    setFormData({
      name: '',
      id: '',
      phone: '',
      email: '',
      position: '',
      teamId: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border border-gray-300 p-4 rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">Add New Employee</h2>
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
