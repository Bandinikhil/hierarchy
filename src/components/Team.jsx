// components/Team.js
// import React from 'react';
// import TeamLeader from './TeamLeader';

// const Team = ({ data }) => {
//   const { name, teamLeader } = data;

//   return (
//     <div className="ml-8 mt-4 p-4 rounded-lg bg-white shadow-md">
//       <div className="flex items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//         </svg>
//         <div className="ml-2">Team - {name}</div>
//       </div>
//       <TeamLeader data={teamLeader} />
//     </div>
//   );
// };

// export default Team;

// // components/Team.js
import React from "react";
import TeamLeader from "./TeamLeader";

const Team = ({ data, highlighted,ceoHighlighted }) => {
  const { name, teamLeader } = data;

  return (
    <div className="ml-8 mt-4 text-left p-2">
  <div className="inline-block border-l px-3 border-gray-300  ">
    <div className="flex items-center">
    <div className='rounded-full border border-gray-300 p-2'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
      </div>

      <div className="ml-2 text-black text-lg font-semibold text-wrap">Team - {name}</div>
    </div>
    <TeamLeader ceoHighlighted={ceoHighlighted} hodhighlighted={highlighted} data={teamLeader} />
  </div>
</div>

    // <div className="ml-8 mt-4 text-left border  border-black rounded-md">
    //   <div className="flex">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    //       />
    //     </svg>

    //     <div className="ml-2">Team - {name}</div>
    //   </div>
    //   <TeamLeader data={teamLeader} />
    // </div>
  );
};

export default Team;

// // components/Team.js
// import React from 'react';
// import TeamLeader from './TeamLeader';

// const Team = ({ data }) => {
//   const { name, teamLeader } = data;

//   return (
//     <div className="ml-8 mt-4">
//       <div className="flex items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//         </svg>
//         <div className="ml-2">Team - {name}</div>
//       </div>
//       <TeamLeader data={teamLeader} />
//     </div>
//   );
// };

// export default Team;

// import React from 'react';
// import TeamLeader from './TeamLeader';

// const Team = ({ data }) => {
//   const { name, teamLeader } = data;

//   return (
//     <div className="ml-8 mt-4">
//       <div className="flex items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//         </svg>
//         <div className="ml-2">Team - {name}</div>
//       </div>
//       <TeamLeader data={teamLeader} />
//     </div>
//   );
// };

// export default Team;

// // components/Team.js
// import React from 'react';
// import TeamLeader from './TeamLeader';

// const Team = ({ data }) => {
//   const { name, teamLeader } = data;

//   return (
//     <div className="ml-8 mt-4">
//       <div className="flex items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//         </svg>
//         <div className="ml-2">Team - {name}</div>
//       </div>
//       <TeamLeader data={teamLeader} />
//     </div>
//   );
// };

// export default Team;
