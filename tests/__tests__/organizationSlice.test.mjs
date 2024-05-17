import { createSlice } from "@reduxjs/toolkit";
import organizationReducer, {
  addTeamMember,
  moveTeamMember,
  removeTeamMember,
  updateEmployeeInfo,
  addTeam,
  editTeam,
  promoteEmployee
} from "../../src/utils/organizationSlice.js";

import data from "../../src/data/data.js";

describe("organizationReducer", () => {
  
  const initialState = { ...data };

  it("should handle moving a team member to another team", () => {
    const action = moveTeamMember({
      departmentId: "HR001",
      currentTeamId: "HR001_T1",
      newTeamId: "HR001_T2",
      teamMemberId: "TM002"
    });
    const newState = organizationReducer(initialState, action);
    const currentTeam = newState.CEO.departments["Head of Staff/HR"].teams[0];
    const newTeam = newState.CEO.departments["Head of Staff/HR"].teams[1];
    expect(currentTeam.teamLeader.teamMembers).toHaveLength(1);
    expect(newTeam.teamLeader.teamMembers).toHaveLength(2);
    expect(
      newTeam.teamLeader.teamMembers.some((member) => member.id === "TM002")
    ).toBe(true);
  });

  it("should handle promoting a team member to team leader", () => {
    const action = promoteEmployee({
      departmentId: "HR001",
      teamId: "HR001_T1",
      teamMemberId: "TM002"
    });
    const newState = organizationReducer(initialState, action);
    const team = newState.CEO.departments["Head of Staff/HR"].teams[0];
    expect(team.teamLeader.teamMembers).toHaveLength(1);
    expect(team.teamLeader.position).toEqual("Team Leader");
    expect(team.teamLeader.id).toEqual("TM002");
  });

  it("should handle editing team details", () => {
    const updatedTeam = {
      name: "Updated Team Name",
      teamLeader: {
        position: "Team Leader",
        name: "Updated Team Leader Name",
        id: "TL001",
        phone: "999-999-9999",
        email: "updated.teamleader@example.com",
        teamMembers: []
      }
    };
    const action = editTeam({
      departmentId: "HR001",
      teamId: "HR001_T1",
      updatedTeam: updatedTeam
    });
    const newState = organizationReducer(initialState, action);
    const editedTeam = newState.CEO.departments["Head of Staff/HR"].teams.find(
      (team) => team.id === "HR001_T1"
    );
    expect(editedTeam.name).toEqual("Updated Team Name");
    expect(editedTeam.teamLeader.name).toEqual("Updated Team Leader Name");
    expect(editedTeam.teamLeader.phone).toEqual("999-999-9999");
    expect(editedTeam.teamLeader.email).toEqual(
      "updated.teamleader@example.com"
    );
  });

  
});
