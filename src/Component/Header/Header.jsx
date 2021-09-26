import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <h1 className="main-heading">Do you need any Developer ?</h1>
      <h3 className="seconday-heading">
        Your minimum budget must be <span className="budget">$15</span>
      </h3>
    </div>
  );
};
