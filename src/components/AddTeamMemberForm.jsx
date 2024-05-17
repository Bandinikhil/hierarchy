// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTeamMember } from '../utils/organizationSlice';

// const AddTeamMemberForm = ({ onClose, departmentId, teamId }) => {
//   const [name, setName] = useState('');
//   const [position, setPosition] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const dispatch = useDispatch();

// console.log("addteam member", departmentId, teamId)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newMember = {
//       id: `TM${Date.now()}`,
//       name,
//       position,
//       phone,
//       email,
//     };

//     // dispatch(addTeamMember(departmentId, teamId, newMember));
//     dispatch(addTeamMember({ departmentId, teamId, teamMember: newMember }));
//     onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4 p-4 bg-white shadow-md rounded">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Position</label>
//         <input
//           type="text"
//           value={position}
//           onChange={(e) => setPosition(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
//         <input
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Add Member
//         </button>
//         <button
//           type="button"
//           onClick={onClose}
//           className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddTeamMemberForm;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTeamMember } from '../utils/organizationSlice';

// const AddTeamMemberForm = ({ departmentId, teamId, onClose }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const dispatch = useDispatch();
// console.log("dptd",departmentId);
// console.log("teamId",teamId);
// console.log("onClose",onClose);
//   const handleAddTeamMember = () => {
//     const newTeamMember = {
//       position: 'Team Member',
//       name,
//       id: `TM${Date.now()}`,
//       phone,
//       email,
//     };
//     dispatch(addTeamMember({ departmentId, teamId, teamMember: newTeamMember }));
   
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//       <div className="bg-white p-4 w-[80%] md:w-1/2 lg:w-1/3 rounded shadow-md">
//         <h2 className="text-lg font-bold mb-4">Add New Team Member</h2>
//         <form onSubmit={handleAddTeamMember}>
//           <div className="mb-2">
//             <label className="block text-sm font-medium">Name</label>
//             <input
//               type="text"
//               className="border p-1 w-full rounded-md"
//               value={name}
//               onChange={(e) => {e.preventDefault(); setName(e.target.value)}}
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block text-sm font-medium">Phone</label>
//             <input
//               type="text"
//               className="border p-1 w-full rounded-md"
//               value={phone}
//               onChange={(e) =>{ e.preventDefault(); setPhone(e.target.value)}}
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block text-sm font-medium ">Email</label>
//             <input
//               type="email"
//               className="border p-1 w-full rounded-md"
//               value={email}
//               onChange={(e) => {e.preventDefault(); setEmail(e.target.value)}}
//               required
//             />
//           </div>
//           <div className="flex justify-end mt-4">
//             <button type="button" className="mr-2 px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
//               Cancel
//             </button>
//             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTeamMemberForm;

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
