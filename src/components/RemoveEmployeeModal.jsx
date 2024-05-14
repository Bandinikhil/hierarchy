// components/RemoveEmployeeModal.js
import React from 'react';

const RemoveEmployeeModal = ({ employee, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Remove Employee</h2>
        <p>Are you sure you want to remove {employee.name}?</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-4">Cancel</button>
          <button onClick={() => onConfirm(employee.id)} className="bg-red-500 text-white px-4 py-2 rounded">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default RemoveEmployeeModal;
