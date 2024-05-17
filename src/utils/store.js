import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './organizationSlice';

const store = configureStore({
  reducer: {
    organization: organizationReducer,
  },
});

export default store;



// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import orgData from '../data/data';

// const initialState = JSON.parse(localStorage.getItem('organizationData')) || orgData;

// const findAndModify = (obj, id, callback) => {
//   if (obj.id === id) {
//     callback(obj);
//     return true;
//   }
//   for (const key in obj.departments) {
//     if (findAndModify(obj.departments[key], id, callback)) {
//       return true;
//     }
//   }
//   if (obj.teams) {
//     for (const team of obj.teams) {
//       if (team.id === id) {
//         callback(team);
//         return true;
//       }
//     }
//   }
//   return false;
// };

// const orgSlice = createSlice({
//   name: 'organization',
//   initialState,
//   reducers: {
//     addEmployee: (state, action) => {
//       const { teamId, employee } = action.payload;
//       findAndModify(state.CEO, teamId, (team) => {
//         team.teamLeader = employee; // This assumes the added employee becomes the team leader
//       });
//     },
//     removeEmployee: (state, action) => {
//       const { id } = action.payload;
//       findAndModify(state.CEO, id, (entity) => {
//         if (entity.teamLeader && entity.teamLeader.id === id) {
//           entity.teamLeader = null; // or provide fallback logic
//         }
//       });
//     },
//     updateEmployee: (state, action) => {
//       const { id, updatedInfo } = action.payload;
//       findAndModify(state.CEO, id, (entity) => {
//         if (entity.teamLeader && entity.teamLeader.id === id) {
//           Object.assign(entity.teamLeader, updatedInfo);
//         }
//       });
//     },
//     addTeam: (state, action) => {
//       const { departmentId, team } = action.payload;
//       findAndModify(state.CEO, departmentId, (department) => {
//         department.teams.push(team);
//       });
//     },
//     updateTeam: (state, action) => {
//       const { id, updatedInfo } = action.payload;
//       findAndModify(state.CEO, id, (team) => {
//         Object.assign(team, updatedInfo);
//       });
//     },
//     promoteEmployee: (state, action) => {
//       const { id, newPosition } = action.payload;
//       findAndModify(state.CEO, id, (entity) => {
//         if (entity.teamLeader && entity.teamLeader.id === id) {
//           entity.teamLeader.position = newPosition;
//         }
//       });
//     },
//     setOrganization: (state, action) => {
//       return action.payload;
//     }
//   }
// });

// export const {
//   addEmployee,
//   removeEmployee,
//   updateEmployee,
//   addTeam,
//   updateTeam,
//   promoteEmployee,
//   setOrganization
// } = orgSlice.actions;

// export const store = configureStore({
//   reducer: {
//     organization: orgSlice.reducer
//   }
// });

// store.subscribe(() => {
//   localStorage.setItem('organizationData', JSON.stringify(store.getState().organization));
// });
