import React, { useEffect, useState } from 'react';
import { Developer } from '../Developer/Developer';
import { Hire } from '../Hire/Hire';
import './Container.css';

export const Container = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
  return (
    <div className="container">
      <div className="devloper-container">
        {developers.map((developer) => (
          <Developer data={developer} key={developer.id} />
        ))}
      </div>
      <div className="hire-box">
        <Hire data={developers} />
      </div>
    </div>
  );
};
