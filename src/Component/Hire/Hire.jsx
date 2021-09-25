import React from 'react';
import './Hire.css';

export const Hire = (props) => {
  console.log(props.developers);
  return (
    <div className="hire">
      <h1>Your hired 5 people</h1>
      <h2>Your cost: 1000</h2>
    </div>
  );
};
