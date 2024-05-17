import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTeam, editTeam } from '../utils/organizationSlice';

const AddEditTeamForm = ({ departmentId, team, onClose }) => {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.organization?.CEO?.departments[departmentId]?.teams);
  
  const [teamName, setTeamName] = useState(team ? team.name : '');
  const [teamLeaderName, setTeamLeaderName] = useState(team ? team.teamLeader.name : '');
  const [teamLeaderPhone, setTeamLeaderPhone] = useState(team ? team.teamLeader.phone : '');
  const [teamLeaderEmail, setTeamLeaderEmail] = useState(team ? team.teamLeader.email : '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the team name already exists
    const isDuplicateName = teams.some(t => t.id !== team?.id && t.name === teamName);
    if (isDuplicateName) {
      setError('Team names cannot be identical!');
      return;
    }

    const teamData = {
      id: team ? team.id : `TEAM_${Date.now()}`,
      name: teamName,
      teamLeader: {
        id: team ? team.teamLeader.id : `LEADER_${Date.now()}`,
        name: teamLeaderName,
        phone: teamLeaderPhone,
        email: teamLeaderEmail,
        position: "Team Leader",
        teamMembers: team ? team.teamLeader.teamMembers : []
      }
    };

    if (team) {
      dispatch(editTeam({ departmentId, teamId: team.id, updatedTeam: teamData }));
    } else {
      dispatch(addTeam({ departmentId, team: teamData }));
    }

    onClose();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">{team ? 'Update Team' : 'Add Team'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name:</label>
                <input 
                  type="text" 
                  id="teamName" 
                  value={teamName} 
                  onChange={(e) => setTeamName(e.target.value)} 
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                  required 
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="teamLeaderName" className="block text-sm font-medium text-gray-700">Team Leader Name:</label>
                <input 
                  type="text" 
                  id="teamLeaderName" 
                  value={teamLeaderName} 
                  onChange={(e) => setTeamLeaderName(e.target.value)} 
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="teamLeaderPhone" className="block text-sm font-medium text-gray-700">Team Leader Phone:</label>
                <input 
                  type="text" 
                  id="teamLeaderPhone" 
                  value={teamLeaderPhone} 
                  onChange={(e) => setTeamLeaderPhone(e.target.value)} 
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="teamLeaderEmail" className="block text-sm font-medium text-gray-700">Team Leader Email:</label>
                <input 
                  type="email" 
                  id="teamLeaderEmail" 
                  value={teamLeaderEmail} 
                  onChange={(e) => setTeamLeaderEmail(e.target.value)} 
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                  required 
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="submit" 
                  className="w-full inline-flex justify-center rounded-r-full rounded-l-full border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {team ? 'Update Team' : 'Add Team'}
                </button>
                <button 
                  type="button" 
                  onClick={onClose} 
                  className="mt-3 w-full inline-flex justify-center rounded-r-full rounded-l-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditTeamForm;


