import React from 'react';
import './style.css';

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.firstName} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;
