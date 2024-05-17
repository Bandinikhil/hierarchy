// // components/Team.js
import React from "react";
import TeamLeader from "./TeamLeader";

const Team = ({
  data,
  highlighted,
  ceoHighlighted,
  departmentId,
  onEditTeam
}) => {
  const { id, name, teamLeader } = data;

  //To render the team names and send the deatils down to team leader for rendering
  return (
    <div className="ml-8 mt-4 text-left p-2">
      <div className="inline-block border-l px-3 transition-all duration-300 ease-in-out border-gray-300  ">
        <div className="flex items-center">
          <div className="flex flex-row items-center gap-x-2">
            <div className="rounded-full border  border-gray-300 p-2">
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

            <div className="flex items-center justify-center gap-2">
              <div className="ml-2 text-black text-lg font-semibold whitespace-nowrap">
                Team - {name}
              </div>
              <button
                className="mt-2 px-3 py-1 line-clamp-1 whitespace-nowrap items-center bg-blue-500 border  border-blue-500 rounded-r-full rounded-l-full text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500"
                onClick={onEditTeam}
              >
                Edit Team
              </button>
            </div>
          </div>
        </div>
        <TeamLeader
          ceoHighlighted={ceoHighlighted}
          hodhighlighted={highlighted}
          data={teamLeader}
          currentTeamId={id}
          departmentId={departmentId}
        />
      </div>
    </div>
  );
};

export default Team;
