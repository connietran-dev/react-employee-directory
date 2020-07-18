import React from 'react';
import './style.css';

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container d-flex align-items-center justify-content-center">
        {/* <img alt={props.firstName} src={props.image} /> */}
        <h2>{props.firstName} {props.lastName}</h2>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Salary:</strong> {props.salary}
          </li>
          <li>
            <strong>Department:</strong> {props.dept}
          </li>
          <li>
            <strong>Manager:</strong> {props.manager}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
