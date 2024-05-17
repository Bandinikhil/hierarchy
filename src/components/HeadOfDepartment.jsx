//components/HeadOfDepartment.js
import React, { useState } from "react";
import Team from "./Team";
import UpdateEmployeeModal from "./UpdateEmployeeModal";

import AddEditTeamForm from "./AddEditTeamForm";

const HeadOfDepartment = ({ data, ceoHighlighted, departmentId }) => {
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
    <div
      className={`ml-8 mt-4 border-l border-gray-300 transition-all duration-300 ease-in-out pl-4 ${
        highlighted ? "bg-gray-100" : ""
      }`}
    >
      <div className="flex flex-row items-center gap-x-2">
        <div
          className={` ${
            ceoHighlighted ? "bg-blue-100" : ""
          }  cursor-pointer transition-all line-clamp-1 whitespace-nowrap duration-300 ease-in-out flex rounded-r-full focus:bg-blue-300 focus:border-blue-500 rounded-l-full justify-between px-1 shadow-md items-center min-w-56  border border-gray-300 `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleOpenModal}
        >
          <div className="rounded-full border border-gray-300 p-2">
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div className="flex flex-col px-3 ">
            <div className="text-black text-lg line-clamp-1 whitespace-nowrap font-semibold text-wrap truncate">
              {name}
            </div>
            <div className="text-base text-gray-500 font-medium text-wrap truncate">
              {position}
            </div>
          </div>
        </div>
      </div>
      <button
        className="mt-2 px-3 py-1 line-clamp-1 overflow-auto whitespace-nowrap items-center bg-blue-500 border  border-blue-500 rounded-r-full rounded-l-full text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500"
        onClick={() => setIsAddingTeam(true)}
      >
        Add Team
      </button>
      {/*       
      modal to update the details */}
      {showModal && (
        <UpdateEmployeeModal employee={data} onClose={handleCloseModal} />
      )}

      {isAddingTeam && (
        <AddEditTeamForm
          departmentId={departmentId}
          onClose={() => setIsAddingTeam(false)}
        />
      )}

      {/* sending props based on add team or edit team */}
      {editingTeam && (
        <AddEditTeamForm
          departmentId={departmentId}
          team={editingTeam}
          onClose={() => setEditingTeam(null)}
        />
      )}
      <div className="mt-4 md:ml-14 flex flex-col md:flex-row">
        {/* Sending teams deatils foor Hierarcal rendering  */}
        {teams?.map((team) => (
          <Team
            ceoHighlighted={ceoHighlighted}
            onEditTeam={() => setEditingTeam(team)}
            highlighted={highlighted}
            key={team.id}
            data={team}
            departmentId={departmentId}
          />
        ))}
      </div>
    </div>
  );
};

export default HeadOfDepartment;
