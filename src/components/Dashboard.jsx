// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import MoonDataTable from './MoonDataTable';
import ChartComponent from './ChartComponent';
import SearchBar from './SearchBar';
import './Dashboard.css';

const Dashboard = () => {
  const [moonPhaseData, setMoonPhaseData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    const fetchMoonPhaseData = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        setMoonPhaseData(data);
        setFilteredData(data); // Initially set the filtered data to all data
      } catch (error) {
        console.error('Error fetching moon phase data:', error);
      }
    };

    fetchMoonPhaseData();
  }, []);

  const updateFilteredData = (date) => {
    if (date) {
      const newFilteredData = moonPhaseData.filter(data => data.date === date);
      setFilteredData(newFilteredData);
    } else {
      setFilteredData(moonPhaseData);
    }
  };

  return (
    <div>
      <h1>Moon Phase Dashboard</h1>
      <SearchBar searchDate={searchDate} setSearchDate={setSearchDate} updateFilteredData={updateFilteredData} />
      <ChartComponent moonPhaseData={filteredData} />
      <MoonDataTable moonPhaseData={filteredData} />
    </div>
  );
};

export default Dashboard;
