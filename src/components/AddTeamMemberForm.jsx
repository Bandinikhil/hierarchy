

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeamMember } from '../utils/organizationSlice';

const AddTeamMemberForm = ({ departmentId, teamId, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleAddTeamMember = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newTeamMember = {
      id: `TM${Date.now()}`,
      name,
      phone,
      email,
      position: 'Team Member',
    };
    dispatch(addTeamMember({ departmentId, teamId, teamMember: newTeamMember }));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 w-[80%] md:w-1/2 lg:w-1/3 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Add New Team Member</h2>
        <form onSubmit={handleAddTeamMember}>
          <div className="mb-2">
            <label className="block text-sm font-medium" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="border p-1 w-full rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium" htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              className="border p-1 w-full rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="border p-1 w-full rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeamMemberForm;
