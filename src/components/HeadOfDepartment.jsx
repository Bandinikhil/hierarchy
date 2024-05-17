// import React, { useState } from "react";
// import Team from "./Team";

// const HeadOfDepartment = ({ data, ceoHighlighted }) => {
//   const { name, position, teams, id: departmentId } = data;
//   const [highlighted, setHighlighted] = useState(false);

//   const handleMouseEnter = () => {
//     setHighlighted(true);
//   };

//   const handleMouseLeave = () => {
//     setHighlighted(false);
//   };

//   return (
//     <div
//       className="ml-8 mt-8"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         className={`flex rounded-r-full justify-between px-1 shadow-md items-center w-64 border border-gray-300 ${
//           highlighted ? "bg-gray-100" : ""
//         }`}
//       >
//         <div className="rounded-full border border-gray-300 p-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 4.229.723M12 11.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5z"
//             />
//           </svg>
//         </div>
//         <div className="flex flex-col px-3 text-left">
//           <div className="text-black text-lg font-semibold text-wrap truncate">
//             {name}
//           </div>
//           <div className="text-base text-gray-500 font-medium text-wrap truncate">
//             {position}
//           </div>
//         </div>
//       </div>
//       <div>
//         {teams?.map((team) => (
//           <Team
//             key={team.id}
//             highlighted={highlighted}
//             hodhighlighted={highlighted}
//             ceoHighlighted={ceoHighlighted}
//             data={team}
//             departmentId={departmentId}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeadOfDepartment;


//components/HeadOfDepartment.js
import React, { useState } from 'react';
import Team from './Team';
import UpdateEmployeeModal from './UpdateEmployeeModal';

import AddEditTeamForm from './AddEditTeamForm';

const HeadOfDepartment = ({ data ,ceoHighlighted, departmentId}) => {
  const { name, position, teams } = data;
  const [highlighted, setHighlighted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAddingTeam, setIsAddingTeam] = useState(false);
  const [editingTeam, setEditingTeam] = useState(null);

  const handleMouseEnter = () => {
    setHighlighted(true);
  };

  const handleMouseLeave = () => {
    setHighlighted(false);
  };

 

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`ml-8 mt-4 border-l border-gray-300 transition-all duration-300 ease-in-out pl-4 ${highlighted ? 'bg-gray-100' : ''}`} >
      <div className='flex flex-row items-center gap-x-2'>
      <div className={` ${ceoHighlighted ? 'bg-blue-100' : ''} cursor-pointer transition-all duration-300 ease-in-out flex rounded-r-full focus:bg-blue-300 focus:border-blue-500 rounded-l-full justify-between px-1 shadow-md items-center w-56  border border-gray-300 `}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      onClick={handleOpenModal}
      >
        <div className='rounded-full border border-gray-300 p-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        </div>
        <div className="flex flex-col px-3 ">
        <div className='text-black text-lg font-semibold text-wrap truncate'>{name}</div>
        <div className='text-base text-gray-500 font-medium text-wrap truncate'>{position}</div>
        </div>
       
      </div>
      <button
  className="mt-2 px-3 py-1 bg-blue-500 border border-blue-500 rounded-r-full rounded-l-full text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500"
  onClick={() => setIsAddingTeam(true)}
>
  Add Team
</button>
</div>
      {/* <button onClick={() => setIsAddingTeam(true)}>Add Team</button> */}
      {showModal && (
        <UpdateEmployeeModal employee={data} onClose={handleCloseModal} />
      )}
    
      {isAddingTeam && (
        <AddEditTeamForm
          departmentId={departmentId}
          onClose={() => setIsAddingTeam(false)}
        />
      )}
      {editingTeam && (
        <AddEditTeamForm
          departmentId={departmentId}
          team={editingTeam}
          onClose={() => setEditingTeam(null)}
        />
      )}
      <div className="mt-4 md:ml-14 flex flex-col md:flex-row">
        {teams?.map(team => (
          <Team ceoHighlighted={ceoHighlighted}  onEditTeam={() => setEditingTeam(team)} highlighted={highlighted} key={team.id} data={team} departmentId={departmentId}/>
        ))}
      </div>
    </div>
  );
};

export default HeadOfDepartment;


// // components/HeadOfDepartment.js
// import React, { useState } from "react";
// import Team from "./Team";

// const HeadOfDepartment = ({ data, ceoHighlighted }) => {
//   const { name, position, teams } = data;
//   const [highlighted, setHighlighted] = useState(false);

//   const handleMouseEnter = () => {
//     setHighlighted(true);
//   };

//   const handleMouseLeave = () => {
//     setHighlighted(false);
//   };

//   return (
//     <div
//       className={`ml-8 mt-4 border-l border-gray-300 pl-4 ${
//         highlighted ? "bg-gray-100" : ""
//       }`}
//     >
//       <div
//         className={` ${
//           ceoHighlighted ? "bg-blue-100" : ""
//         } flex rounded-r-full focus:bg-blue-300 focus:border-blue-500 rounded-l-full justify-between px-1 shadow-md items-center w-56  border border-gray-300 `}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="rounded-full border border-gray-300 p-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//             />
//           </svg>
//         </div>
//         <div className="flex flex-col px-3 ">
//           <div className="text-black text-lg font-semibold text-wrap truncate">
//             {name}
//           </div>
//           <div className="text-base text-gray-500 font-medium text-wrap truncate">
//             {position}
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 md:ml-14 flex flex-col md:flex-row">
//         {teams.map((team) => (
//           <div key={team.id}>
//             <Team
//               ceoHighlighted={ceoHighlighted}
//               highlighted={highlighted}
//               key={team.id}
//               data={team}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeadOfDepartment;
