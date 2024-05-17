import React, { useState } from 'react';
import TeamMember from './TeamMember';
import AddTeamMemberForm from './AddTeamMemberForm';
import UpdateEmployeeModal from './UpdateEmployeeModal';

const TeamLeader = ({ data, departmentId, hodhighlighted, ceoHighlighted, currentTeamId }) => {
  const { name, position, teamMembers, id: teamId } = data;
  const [highlighted, setHighlighted] = useState(false);
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => setHighlighted(true);
  const handleMouseLeave = () => setHighlighted(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`ml-8 mt-4 ${highlighted ? 'bg-gray-100' : ''}`} >
      <div className={`${hodhighlighted || ceoHighlighted ? 'bg-blue-100' : ''} line-clamp-1 whitespace-nowrap cursor-pointer flex rounded-r-full focus:bg-blue-300 focus:border-blue-500 rounded-l-full justify-between px-1 shadow-md items-center w-52 border border-gray-300`}
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
      {showModal && (
        <UpdateEmployeeModal employee={data} onClose={handleCloseModal} />
      )}
      <div className="mt-4">
        {teamMembers.map(member => (
          <TeamMember
            key={member.id}
            data={member}
            departmentId={departmentId}
            currentTeamId={currentTeamId}
            ceoHighlighted={ceoHighlighted}
            hodhighlighted={hodhighlighted}
            highlighted={highlighted}
          />
        ))}
        {/* <button
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setIsAddingMember(true)}
        >
          Add Team Member
        </button> */}
        <button
  className="mt-2 px-4 py-2 bg-green-500 border line-clamp-1 whitespace-nowrap border-green-500 rounded-r-full rounded-l-full text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-green-500"
   onClick={() => setIsAddingMember(true)} >
   Add Team Member
</button>
      </div>
      {isAddingMember && <AddTeamMemberForm departmentId={departmentId} teamId={currentTeamId} onClose={() => setIsAddingMember(false)} />}
    </div>
  );
};

export default TeamLeader;


