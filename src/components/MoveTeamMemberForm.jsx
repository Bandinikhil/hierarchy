import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveTeamMember } from "../utils/organizationSlice";

const MoveTeamMemberForm = ({
  departmentId,
  currentTeamId,
  teamMemberId,
  onClose
}) => {
  const [newTeamId, setNewTeamId] = useState("");
  const dispatch = useDispatch();
  const teams = useSelector(
    (state) => state.organization.CEO.departments[departmentId].teams
  );

  // send current team Id to move to the new team within the same department and teammember id to move
  const handleMoveTeamMember = (e) => {
    e.preventDefault();
    dispatch(
      moveTeamMember({ departmentId, currentTeamId, newTeamId, teamMemberId })
    );
    onClose();
  };

  //Form to move team member from one team to another team
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 w-[80%] md:w-1/2 lg:w-1/3 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Move Team Member</h2>
        <form onSubmit={handleMoveTeamMember}>
          <div className="mb-2">
            <label className="block text-sm font-medium" htmlFor="team">
              Select New Team
            </label>
            <select
              id="team"
              className="border p-1 w-full rounded-md"
              value={newTeamId}
              onChange={(e) => setNewTeamId(e.target.value)}
              required
            >
              <option value="" disabled>
                Select team
              </option>
              {teams.map(
                (team) =>
                  team.id !== currentTeamId && (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  )
              )}
            </select>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Move
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MoveTeamMemberForm;
