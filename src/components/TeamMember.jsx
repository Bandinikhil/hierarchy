import React, { useState } from 'react';
import MoveTeamMemberForm from './MoveTeamMemberForm';
import { useDispatch } from 'react-redux';
import { removeTeamMember, promoteEmployee } from '../utils/organizationSlice';
import UpdateEmployeeModal from './UpdateEmployeeModal';
import { addTeam, editTeam } from '../utils/organizationSlice';

const TeamMember = ({ data, departmentId, currentTeamId, ceoHighlighted, hodhighlighted, highlighted }) => {
  const [isMovingMember, setIsMovingMember] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [isEditingTeam, setIsEditingTeam] = useState(false);
  // const [teamName, setTeamName] = useState('');

  const dispatch = useDispatch();
  const { id, name, position, phone, email } = data;

  const handleRemove = () => {
    dispatch(removeTeamMember({ departmentId, teamId: currentTeamId, teamMemberId: id }));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePromote = () => {
    dispatch(promoteEmployee({ departmentId, teamId: currentTeamId, teamMemberId: id }));
  };

  return (
    <div className="ml-8 mt-4">
      <div className='flex flex-row items-center gap-x-2'>
        <div className={` ${(hodhighlighted || highlighted || ceoHighlighted) ? 'bg-blue-100' : ''} cursor-pointer transition-all duration-300 ease-in-out flex rounded-r-full focus:bg-blue-300 focus:border-blue-500 rounded-l-full justify-between px-1 shadow-md items-center w-52  border border-gray-300 `}
        onClick={handleOpenModal}
        >
          <div className='rounded-full border border-gray-300 p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <div className="flex flex-col px-3  ">
            <div className='text-black text-lg font-semibold truncate text-wrap'>{name}</div>
            <div className='text-base text-gray-500 font-medium truncate text-wrap'>{position}</div>
          </div>
        </div>
        {showModal && (
        <UpdateEmployeeModal employee={data} onClose={handleCloseModal} />
      )}
        <button
          className="mt-2 px-3 py-1 bg-blue-500 border border-blue-500 rounded-r-full rounded-l-full text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500"
          onClick={() => setIsMovingMember(true)}
        >
          Move
        </button>
        <button
          className="mt-2 px-2 py-1 bg-red-500 border border-red-500 rounded-r-full rounded-l-full text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-red-500"
          onClick={handleRemove}
        >
          Remove
        </button>
        <button
          className="mt-2 px-2 py-1 bg-green-500 border border-green-500 rounded-r-full rounded-l-full text-white hover:bg-white hover:text-green-500"
          onClick={handlePromote}
        >
          Promote
        </button>
        {/* <button
          className="mt-2 px-3 py-1 bg-blue-500 border border-blue-500 rounded-r-full rounded-l-full text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500"
          onClick={() => setIsEditingTeam(true)}
        >
          {isEditingTeam ? 'Update Team' : 'Create Team'}
        </button> */}
      </div>
      
      {isMovingMember && (
        <MoveTeamMemberForm
          departmentId={departmentId}
          currentTeamId={currentTeamId}
          teamMemberId={id}
          onClose={() => setIsMovingMember(false)}
        />
      )}
    </div>
  );
};

export default TeamMember;






