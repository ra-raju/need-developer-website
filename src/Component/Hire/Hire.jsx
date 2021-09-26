import React from 'react';
import './Hire.css';

export const Hire = (props) => {
  // console.log(props.data);
  const { data } = props;

  const totalCost = data.reduce((prev, curr) => prev + curr.price, 0);
  return (
    <div className="hire">
      <h1>Your hired {data.length} people</h1>
      <h2>Your cost: ${totalCost}</h2>
    </div>
  );
};
