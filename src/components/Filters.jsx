// src/components/Filters.jsx

import React from 'react';

const Filters = ({ 
    selectedCategory, 
    setSelectedCategory, 
    temperatureRange, 
    setTemperatureRange, 
    selectedPhase, 
    setSelectedPhase 
}) => {
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleTemperatureChange = (e) => {
        setTemperatureRange(e.target.value.split(',').map(Number));
    };

    const handlePhaseChange = (e) => {
        setSelectedPhase(Number(e.target.value));
    };

    return (
        <div>
            <select onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                {/* Add more categories as needed */}
            </select>

            <input 
                type="range" 
                min="0" 
                max="100" 
                value={temperatureRange} 
                onChange={handleTemperatureChange} 
                step="1" 
            />

            <div>
                <label htmlFor="phaseSlider">Moon Phase:</label>
                <input 
                    type="range" 
                    id="phaseSlider"
                    min="0" 
                    max="3"  // Assuming you have 4 moon phases: 0=New, 1=First Quarter, 2=Full, 3=Last Quarter
                    value={selectedPhase}
                    onChange={handlePhaseChange} 
                />
            </div>
        </div>
    );
};

export default Filters;
