// src/components/MoonDataTable.jsx
import React from 'react';

const MoonDataTable = ({ data }) => {
  return (
    <table id="moon-data">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temperature</th>
          <th>Moon Rise</th>
          <th>Moon Set</th>
          <th>Phase</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ date, temperature, moonRise, moonSet, phase }) => (
          <tr key={date}>
            <td>{date}</td>
            <td>{temperature}</td>
            <td>{moonRise}</td>
            <td>{moonSet}</td>
            <td>{phase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoonDataTable;
