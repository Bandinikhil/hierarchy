import { createSlice } from "@reduxjs/toolkit";
import orgData from "../data/data";

//taking data from local storage if not availabe taking the json data
const storedData = localStorage.getItem("organizationData");
 
const initialState = storedData ? JSON.parse(storedData) : orgData;

const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {

    // To add new team member reducer function to update the state based on the actions
    addTeamMember: (state, action) => {
      
      const { departmentId, teamId, teamMember } = action.payload;
      console.log("slicess", action.payload);
      console.log("dptId slice", departmentId, teamId, teamMember);
      const team = state.CEO.departments[departmentId].teams.find(
        (t) => t.id === teamId
      );
      team.teamLeader.teamMembers.push(teamMember);
      localStorage.setItem("organizationData", JSON.stringify(state));
    },

    // reducer function to move team member from team to anther team by destructuring actions which are passed
    moveTeamMember: (state, action) => {
      const { departmentId, currentTeamId, newTeamId, teamMemberId } =
        action.payload;
      console.log("move", departmentId, currentTeamId, newTeamId, teamMemberId);

      // Get the current team
      const department = state.CEO.departments[departmentId];
      if (!department) {
        console.error("Department not found");
        return;
      }

      const currentTeam = department.teams.find((t) => t.id === currentTeamId);
      if (!currentTeam) {
        console.error("Current team not found");
        return;
      }

      const newTeam = department.teams.find((t) => t.id === newTeamId);
      if (!newTeam) {
        console.error("New team not found");
        return;
      }

      // Find the team member index in the current team
      const teamMemberIndex = currentTeam.teamLeader.teamMembers.findIndex(
        (member) => member.id === teamMemberId
      );
      if (teamMemberIndex === -1) {
        console.error("Team member not found in current team");
        return;
      }

      // Move the team member to the new team
      const [teamMember] = currentTeam.teamLeader.teamMembers.splice(
        teamMemberIndex,
        1
      );
      newTeam.teamLeader.teamMembers.push(teamMember);

      // Persist the changes to localStorage
      localStorage.setItem("organizationData", JSON.stringify(state));
    },

    //to remove the teamber and update the localStorage
    removeTeamMember: (state, action) => {
      const { departmentId, teamId, teamMemberId } = action.payload;
      const department = state.CEO.departments[departmentId];
      if (!department) return console.error("Department not found");

      const team = department.teams.find((t) => t.id === teamId);
      if (!team) return console.error("Team not found");

      const teamMemberIndex = team.teamLeader.teamMembers.findIndex(
        (member) => member.id === teamMemberId
      );
      if (teamMemberIndex === -1)
        return console.error("Team member not found in team");

      team.teamLeader.teamMembers.splice(teamMemberIndex, 1);
      localStorage.setItem("organizationData", JSON.stringify(state));
    },

    updateEmployeeInfo: (state, action) => {
      const { id, name, phone, email } = action.payload;

      // Update CEO details if ID matches
      if (state.CEO.id === id) {
        state.CEO.name = name;
        state.CEO.phone = phone;
        state.CEO.email = email;
        return;
      }

      // Iterate through departments
      for (const departmentKey in state.CEO.departments) {
        const department = state.CEO.departments[departmentKey];
        // Update Head of Department details if ID matches
        if (department.id === id) {
          department.name = name;
          department.phone = phone;
          department.email = email;
          return;
        }
        // Iterate through teams in the department
        for (const team of department.teams) {
          const leader = team.teamLeader;
          // Update team leader details if ID matches
          if (leader.id === id) {
            leader.name = name;
            leader.phone = phone;
            leader.email = email;
            return;
          }
          // Search for the employee in team members
          for (const member of leader.teamMembers) {
            if (member.id === id) {
              // Update the member information
              member.name = name;
              member.phone = phone;
              member.email = email;
              return;
            }
          }
        }
      }
    },

    // to add a new team member in the same department
    addTeam: (state, action) => {
      const { departmentId, team } = action.payload;
      const department = state.CEO.departments[departmentId];
      department.teams.push(team);
      localStorage.setItem("organizationData", JSON.stringify(state));
    },
    editTeam: (state, action) => {
      const { departmentId, teamId, updatedTeam } = action.payload;
      const department = state.CEO.departments[departmentId];
      const teamIndex = department.teams.findIndex((t) => t.id === teamId);
      department.teams[teamIndex] = {
        ...department.teams[teamIndex],
        ...updatedTeam
      };
      localStorage.setItem("organizationData", JSON.stringify(state));
    },

    //to promote the team member to team leader and persist all other team members
    promoteEmployee: (state, action) => {
      const { departmentId, teamId, teamMemberId } = action.payload;
      const department = state.CEO.departments[departmentId];
      const team = department.teams.find((t) => t.id === teamId);

      if (!team) {
        console.error("Team not found");
        return;
      }

      const teamMemberIndex = team.teamLeader.teamMembers.findIndex(
        (member) => member.id === teamMemberId
      );
      if (teamMemberIndex === -1) {
        console.error("Team member not found");
        return;
      }

      const [teamMember] = team.teamLeader.teamMembers.splice(
        teamMemberIndex,
        1
      );

      // Preserve the current team leader's team members
      const currentTeamLeaderMembers = team.teamLeader.teamMembers;

      if (teamMember) {
        // Promote to Team Leader if not already a Team Leader
        team.teamLeader = {
          ...teamMember,
          position: "Team Leader",
          teamMembers: currentTeamLeaderMembers
        };
      }

      localStorage.setItem("organizationData", JSON.stringify(state));
    }
  }
});

export const {
  addTeamMember,
  moveTeamMember,
  removeTeamMember,
  updateEmployeeInfo,
  addTeam,
  editTeam,
  promoteEmployee
} = organizationSlice.actions;

export default organizationSlice.reducer;
