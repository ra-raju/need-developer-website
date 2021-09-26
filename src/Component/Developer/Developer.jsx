import React from 'react';
import './Developer.css';

export const Developer = (props) => {
  // console.log(props);
  const { img, name, country, rating, price, skills } = props.data;

  const [skill1, skill2] = skills;

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-info">
        <table>
          <tbody>
            <tr>
              <td className="table-title">Name: </td>
              <td className="table-value">{name}</td>
            </tr>
            <tr>
              <td className="table-title">Country: </td>
              <td className="table-value">{country}</td>
            </tr>
            <tr>
              <td className="table-title">Rating: </td>
              <td className="table-value">{rating}</td>
            </tr>
            <tr>
              <td className="table-title">Hourly Rate : </td>
              <td className="table-value">${price}</td>
            </tr>
            <tr>
              <td className="table-title">Skills: </td>
              <td className="table-value">
                <span className="skill">{skill1}</span>
                <span className="skill">{skill2}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn">
        <button
          className="hireBtn"
          onClick={() => props.hireBtnHandler(props.data)}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};
