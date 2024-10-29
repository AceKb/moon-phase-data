// src/components/MoonDataTable.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const MoonDataTable = ({ moonPhaseData }) => {
  return (
    <table id="moon-data">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temperature</th>
          <th>Time</th>
          <th>Phase</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {moonPhaseData.map(({ date, temperature, time, phase }) => (
          <tr key={date}>
            <td>{date}</td>
            <td>{temperature}</td>
            <td>{time}</td>
            <td>{phase}</td>
            <td>
              <Link to={`/details/${date}`}>🔗</Link> {/* Link to the details page */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoonDataTable;
