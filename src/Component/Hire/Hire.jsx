import React from 'react';
import './Hire.css';

export const Hire = (props) => {
  const { data } = props;

  const totalCost = data.reduce((prev, curr) => prev + curr.price, 0);
  return (
    <div className="hire">
      <h1>
        You hired <span className="length">{data.length}</span> people
      </h1>
      <p>
        Your cost: <span className="total-cost">${totalCost}</span>
      </p>
      <p className="selected-people">Your selected people: </p>
      {data.map((developer) => (
        <p>{developer.name}</p>
      ))}
    </div>
  );
};
