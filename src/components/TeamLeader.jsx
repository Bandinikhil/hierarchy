// components/TeamLeader.js
// import React, { useState } from 'react';
// import TeamMember from './TeamMember';

// const TeamLeader = ({ data }) => {
//   const { name, position, teamMembers } = data;
//   const [highlighted, setHighlighted] = useState(false);

//   const handleMouseEnter = () => {
//     setHighlighted(true);
//   };

//   const handleMouseLeave = () => {
//     setHighlighted(false);
//   };

//   return (
//     <div className={`ml-8 mt-4 p-4 rounded-lg ${highlighted ? 'bg-blue-100' : 'bg-white'} shadow-md`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="flex items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//         </svg>
//         <div className="ml-2">{position} - {name}</div>
//       </div>
//       <div className="mt-4">
//         {teamMembers.map(member => (
//           <TeamMember key={member.id} data={member} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamLeader;

// // components/TeamLeader.js
import React, { useState } from 'react';
import TeamMember from './TeamMember';

const TeamLeader = ({ data,hodhighlighted,ceoHighlighted }) => {
  const { name, position, teamMembers } = data;
  const [highlighted, setHighlighted] = useState(false);

  const handleMouseEnter = () => {
    setHighlighted(true);
  };

  const handleMouseLeave = () => {
    setHighlighted(false);
  };

  return (
    <div className={`ml-8 mt-4 ${highlighted  ? 'bg-gray-100' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={` ${hodhighlighted || ceoHighlighted ? 'bg-blue-100' : ''} flex rounded-r-full focus:bg-blue-300 focus:border-blue-500 rounded-l-full justify-between px-1 shadow-md items-center max-w-52  border border-gray-300  `}
       onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
      <div className='rounded-full border border-gray-300 p-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        </div>
        <div className="flex flex-col px-3 ">
        <div className='text-black text-lg font-semibold text-wrap'>{name}</div>
        <div className='text-base text-gray-500 font-medium text-wrap'>{position}</div>
        </div>
      </div>
      <div className="mt-4">
        {teamMembers.map(member => (
          <TeamMember ceoHighlighted={ceoHighlighted} hodhighlighted={hodhighlighted} highlighted={highlighted} key={member.id} data={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamLeader;


// // components/TeamLeader.js
// import React, { useState } from 'react';
// import TeamMember from './TeamMember';

// const TeamLeader = ({ data }) => {
//   const { name, position, teamMembers } = data;
//   const [highlighted, setHighlighted] = useState(false);

//   const handleMouseEnter = () => {
//     setHighlighted(true);
//   };

//   const handleMouseLeave = () => {
//     setHighlighted(false);
//   };

//   return (
//     <div className={`ml-8 mt-4 ${highlighted ? 'bg-gray-100' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="flex items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//         </svg>
//         <div className="ml-2">{position} - {name}</div>
//       </div>
//       <div className="mt-4">
//         {teamMembers.map(member => (
//           <TeamMember key={member.id} data={member} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamLeader;

// import React, { useState } from 'react';
// import TeamMember from './TeamMember';

// const TeamLeader = ({ data }) => {
//   const { name, position, teamMembers } = data;
//   const [highlighted, setHighlighted] = useState(false);

//   const handleMouseEnter = () => {
//     setHighlighted(true);
//   };

//   const handleMouseLeave = () => {
//     setHighlighted(false);
//   };

//   return (
//     <div className={`ml-8 mt-4 ${highlighted ? 'bg-gray-100' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="flex items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//         </svg>
//         <div className="ml-2">{position} - {name}</div>
//       </div>
//       <div className="mt-4">
//         {teamMembers.map(member => (
//           <TeamMember key={member.id} data={member} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamLeader;



// // components/TeamLeader.js
// import React, { useState } from 'react';
// import TeamMember from './TeamMember';

// const TeamLeader = ({ data }) => {
//   const { name, position, teamMembers } = data;
//   const [highlighted, setHighlighted] = useState(false);

//   const handleMouseEnter = () => {
//     setHighlighted(true);
//   };

//   const handleMouseLeave = () => {
//     setHighlighted(false);
//   };

//   return (
//     <div className={`ml-8 mt-4 ${highlighted ? 'bg-gray-100' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="flex items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//         </svg>
//         <div className="ml-2">{position} - {name}</div>
//       </div>
//       <div className="mt-4">
//         {teamMembers.map(member => (
//           <TeamMember key={member.id} data={member} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamLeader;