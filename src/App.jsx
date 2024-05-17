import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CEO from './components/CEO';
import FilterEmployees from './components/FilterEmployees';
import FilteredEmployeeList from './components/FilteredEmployeeList';

function App() {
  const data = useSelector(state => state.organization);
  const [filteredData, setFilteredData] = useState(null);

  const handleFilter = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <div className="App">
      <FilterEmployees onFilter={handleFilter} />
      {filteredData ? (
        <FilteredEmployeeList filteredData={filteredData} />
      ) : (
        data ? (
          <CEO data={data.CEO} />
        ) : (
          <div className="text-center">Loading...</div>
        )
      )}
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import CEO from './components/CEO';
// import FilterEmployee from './components/FilterEmployees';
// import FilteredEmployeeList from './components/FilteredEmployeeList'; // Import your new component

// function App() {
//   const data = useSelector(state => state.organization);
//   const [filteredData, setFilteredData] = useState(null);

//   const handleFilter = (filteredData) => {
//     setFilteredData(filteredData);
//   };

//   return (
//     <div className="App">
//       <FilterEmployee data={data} onFilter={handleFilter} />
//       {filteredData ? (
//         <FilteredEmployeeList filteredData={filteredData} /> // Render the FilteredEmployeeList component
//       ) : (
//         data ? (
//           <CEO data={data.CEO} />
//         ) : (
//           <div className="text-center">Loading...</div>
//         )
//       )}
//     </div>
//   );
// }

// export default App;


// import React from 'react';

// import { useSelector } from 'react-redux';

// import CEO from './components/CEO';

// function App() {
//   const data = useSelector(state => state.organization);

//   console.log("store", data);

//   return (
   
//       <div className="App">
//         {data ? <CEO data={data.CEO} /> : <div className="text-center">Loading...</div>}
//       </div>
   
//   );
// }

// export default App;



