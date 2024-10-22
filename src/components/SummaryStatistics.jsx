// src/components/SummaryStats.jsx

import React from 'react';

const SummaryStats = ({ data }) => {
    const totalItems = data.length;
    const averageTemperature = data.reduce((sum, item) => sum + item.temp, 0) / totalItems || 0;
    const maxTemperature = Math.max(...data.map(item => item.temp)) || 0;

    return (
        <div>
            <h3>Total Items: {totalItems}</h3>
            <h3>Average Temperature: {averageTemperature.toFixed(2)} °F</h3>
            <h3>Maximum Temperature: {maxTemperature} °F</h3>
        </div>
    );
};

export default SummaryStats;
