// components/NewEmployeeForm.js
import React, { useState } from 'react';

const NewEmployeeForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    id: '',
    phone: '',
    email: ''
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
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Employee</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 px-2 py-1 mb-2"
            required
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            className="border border-gray-300 px-2 py-1 mb-2"
            required
          />
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="ID"
            className="border border-gray-300 px-2 py-1 mb-2"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border border-gray-300 px-2 py-1 mb-2"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
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

export default NewEmployeeForm;
