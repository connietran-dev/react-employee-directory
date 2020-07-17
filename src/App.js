import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import EmployeeCard from "./components/EmployeeCard";
import employeesArray from "./employees.json";

import './App.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [employees, setEmployees] = useState(employeesArray);
  const [filterDept, setFilterDept] = useState('');

  function sortFirstName() {
    let sortEmployees = employeesArray.sort((a, b) => {
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
    setEmployees(sortEmployees);
  };

  function sortLastName() {
    let sortEmployees = employeesArray.sort((a, b) => {
      let fa = a.last_name.toLowerCase(),
        fb = b.last_name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    setEmployees(sortEmployees);
  };

  const filterByDept = (event) => {
    let filterEmployees = employeesArray.filter(employee => {
      return employee.department === event.target.value;
    });

    setEmployees(filterEmployees);
    setFilterDept(event.target.value);
  };

  return (
    <div className="wrapper">
      <Container fixed>
        <h1 className="title">Employee Directory</h1>
      </Container>
      <Container fixed>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={sortFirstName} >
            Sort by First Name
          </Button>
          <Button onClick={sortLastName} >
            Sort by Last Name
          </Button>
        </ButtonGroup>
        <FormControl className={classes.formControl}>
          <InputLabel id="filter-dept-label">Filter by Department</InputLabel>
          <Select
            labelId="filter-dept-label"
            id="filter-dept-select"
            value={filterDept}
            onChange={filterByDept}
          >
            <MenuItem value="Executive">Executive</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Operations">Operations</MenuItem>
            <MenuItem value="Information Technology">Information Technology</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Human Resources">Human Resources</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <Grid container className={classes.root} spacing={2}>
        {
          employees.map(employee => 
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
      </Grid>
    </div>
  );
}

export default App;
