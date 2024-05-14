// components/TeamMemberList.js
import React from 'react';
import TeamMember from './TeamMember';

const TeamMemberList = ({ members, onRemove, onPromote }) => {
  return (
    <div>
      {members.map((member) => (
        <TeamMember key={member.id} member={member} onRemove={onRemove} onPromote={onPromote} />
      ))}
    </div>
  );
};

export default TeamMemberList;
