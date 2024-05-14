// App.js
import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import Hierarchy from './components/Hierarchy';
import AddEmployeeForm from './components/AddEmployeeForm';
import TeamForm from './components/TeamForm';
import data from "./data/data"

console.log(data);
// App.js

import CEO from './components/CEO';

function App() {
  // JSON data


  return (
    <div className="">
      <CEO data={data.CEO} />
    </div>
  );
}

export default App;


// const App = () => {
//   const [employees, setEmployees] = useState({});
//   const [filteredEmployees, setFilteredEmployees] = useState({});
//   const [showTeamForm, setShowTeamForm] = useState(false);
//   const [editTeam, setEditTeam] = useState(null);

//   useEffect(() => {
//     // const storedData = localStorage.getItem('employees');
//     // if (storedData) {
//       setEmployees(data);
//       setFilteredEmployees(data);
//     // }
//   }, []);

//   const handleFilter = (query) => {
//     const filtered = Object.values(employees).flatMap(department =>
//       Object.values(department.teams).flatMap(team =>
//         [...team.teamLeader.teamMembers, team.teamLeader]
//       )
//     ).filter(employee =>
//       employee.name.toLowerCase().includes(query.toLowerCase()) ||
//       employee.phone.includes(query) ||
//       employee.email.toLowerCase().includes(query.toLowerCase())
//     );

//     setFilteredEmployees(filtered);
//   };

//   const handleAddEmployee = (employee) => {
//     const updatedEmployees = { ...employees };
//     updatedEmployees[employee.position].teams[employee.teamId].teamLeader.teamMembers.push(employee);
//     setEmployees(updatedEmployees);
//     setFilteredEmployees(updatedEmployees);
//     localStorage.setItem('employees', JSON.stringify(updatedEmployees));
//   };

//   const handleAddTeam = (team) => {
//     const updatedEmployees = { ...employees };
//     if (editTeam) {
//       updatedEmployees[editTeam.department].teams[editTeam.id].name = team.name;
//     } else {
//       const department = Object.keys(updatedEmployees)[0]; 
//       const newTeamId = `NEW_${Date.now()}`;
//       updatedEmployees[department].teams[newTeamId] = {
//         id: newTeamId,
//         name: team.name,
//         teamLeader: { position: 'Team Leader', name: '', id: '', phone: '', email: '', teamMembers: [] }
//       };
//     }
//     setEmployees(updatedEmployees);
//     setFilteredEmployees(updatedEmployees);
//     setShowTeamForm(false);
//     setEditTeam(null);
//     localStorage.setItem('employees', JSON.stringify(updatedEmployees));
//   };

//   const handleEditTeam = (team) => {
//     setEditTeam(team);
//     setShowTeamForm(true);
//   };

//   const handleCancelTeamForm = () => {
//     setShowTeamForm(false);
//     setEditTeam(null);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-semibold mb-4">Company Hierarchy</h1>
//       <FilterBar onFilter={handleFilter} />
//       <Hierarchy data={filteredEmployees} onEditTeam={handleEditTeam} />
//       <AddEmployeeForm teams={Object.values(employees).flatMap(department =>
//         Object.values(department.teams)
//       )} onSubmit={handleAddEmployee} />
//       {showTeamForm && <TeamForm onSubmit={handleAddTeam} onCancel={handleCancelTeamForm} team={editTeam} />}
//     </div>
//   );
// };

// export default App;




// // App.js
// import React, { useState } from 'react';
// import EmployeeHierarchy from './components/EmployeeHierarchy';
// import EmployeeDetails from './components/EmployeeDetails';
// import TeamDetails from './components/TeamDetails';
// import NewTeamForm from './components/NewTeamForm';

// import data from './data/data'; // Your JSON data

// const App = () => {
//   const [hierarchy, setHierarchy] = useState(data);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [selectedTeam, setSelectedTeam] = useState(null);

//   const handleEmployeeClick = (employeeKey) => {
//     setSelectedEmployee(hierarchy[employeeKey]);
//   };

//   const handleTeamClick = (teamName) => {
//     setSelectedTeam(hierarchy.CEO.departments[teamName]);
//   };

//   const handleAddTeam = (teamName) => {
//     const newTeam = {
//       id: teamName,
//       name: teamName,
//       teamLeader: {
//         name: '',
//         id: '',
//         phone: '',
//         email: '',
//         position: 'Team Leader',
//         teamMembers: []
//       }
//     };
//     setHierarchy({
//       ...hierarchy,
//       CEO: {
//         ...hierarchy.CEO,
//         departments: {
//           ...hierarchy.CEO.departments,
//           [teamName]: newTeam
//         }
//       }
//     });
//   };

//   const handleAddMember = (formData) => {
//     const { name, position, id, phone, email } = formData;
//     const newMember = {
//       name,
//       position,
//       id,
//       phone,
//       email
//     };
//     setSelectedTeam((prevTeam) => {
//       return {
//         ...prevTeam,
//         teamLeader: {
//           ...prevTeam.teamLeader,
//           teamMembers: [...prevTeam.teamLeader.teamMembers, newMember]
//         }
//       };
//     });
//   };

//   const handleRemoveMember = (memberId) => {
//     setSelectedTeam((prevTeam) => {
//       return {
//         ...prevTeam,
//         teamLeader: {
//           ...prevTeam.teamLeader,
//           teamMembers: prevTeam.teamLeader.teamMembers.filter((member) => member.id !== memberId)
//         }
//       };
//     });
//   };

//   const handlePromoteMember = (member) => {
//     setSelectedTeam((prevTeam) => {
//       const newTeamMember = { ...member, position: 'Team Leader' };
//       return {
//         ...prevTeam,
//         teamLeader: {
//           ...prevTeam.teamLeader,
//           teamMembers: prevTeam.teamLeader.teamMembers.filter((mem) => mem.id !== member.id)
//         },
//         teamLeader: {
//           ...prevTeam.teamLeader,
//           teamMembers: [...prevTeam.teamLeader.teamMembers, newTeamMember]
//         }
//       };
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex">
//         <div className="w-1/4">
//           <h1 className="text-2xl font-semibold mb-4">Employee Hierarchy</h1>
//           <EmployeeHierarchy hierarchy={hierarchy} onClick={handleEmployeeClick} />
//         </div>
//         <div className="w-3/4 ml-8">
//           {selectedEmployee && (
//             <EmployeeDetails employee={selectedEmployee} />
//           )}
//           {selectedTeam && (
//             <TeamDetails
//               team={selectedTeam}
//               onRemoveMember={handleRemoveMember}
//               onPromoteMember={handlePromoteMember}
//               onAddMember={handleAddMember}
//             />
//           )}
//         </div>
//       </div>
//       {/* <NewTeamForm onSubmit={handleAddTeam} onCancel={() => {}} /> */}
//     </div>
//   );
// };

// export default App;




// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
