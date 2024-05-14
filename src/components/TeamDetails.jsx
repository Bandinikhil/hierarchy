// components/TeamDetails.js
import React from 'react';
import TeamMemberList from './TeamMemberList';
import NewEmployeeForm from './NewEmployeeForm';

const TeamDetails = ({ team, onRemoveMember, onPromoteMember, onAddMember }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
      <h2 className="text-lg font-semibold mb-4">{team.name}</h2>
      <TeamMemberList members={team.teamLeader.teamMembers} onRemove={onRemoveMember} onPromote={onPromoteMember} />
      <NewEmployeeForm onSubmit={onAddMember} onCancel={() => {}} />
    </div>
  );
};

export default TeamDetails;
