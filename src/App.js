import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';

import EmployeeCard from "./components/EmployeeCard";
import employeesArray from "./employees.json";

function App() {
  const [employees, setEmployees] = useState(employeesArray);

  function sortFirstName() {
    let sortEmployees = employees.sort((a, b) => {
      let fa = a.first_name.toLowerCase(),
        fb = b.first_name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    // setEmployees takes previous state value and changed state value
    setEmployees(...employees, sortEmployees);
  };

  return (
    <div className="wrapper">
      <Container maxWidth="sm">
        <h1 className="title">Employee Directory</h1>
      </Container>
      <Container maxWidth="sm">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={sortFirstName} >
            Sort by First Name
          </Button>
          <Button>Sort by Last Name</Button>
        </ButtonGroup>
      </Container>
      {
        employeesArray.map(employee =>
          <EmployeeCard
            key={employee.id}
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
