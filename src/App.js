import React from 'react';
import logo from './logo.svg';
import './App.css';

import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">Employee Directory</h1>
      {
        employees.map(employee =>
          <EmployeeCard 
            firstName={employee.first_name} 
            lastName={employee.last_name}
            title={employee.title} 
            salary={employee.salary} 
            dept={employee.department} 
            manager={employee.manager} 
          />)
      }
    </div>
  );
}

export default App;
