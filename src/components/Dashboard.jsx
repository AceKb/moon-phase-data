// src/components/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import SummaryStats from './SummaryStats';
import SearchBar from './SearchBar';
import Filters from './Filters';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [temperatureRange, setTemperatureRange] = useState([0, 100]);
    const [selectedPhase, setSelectedPhase] = useState(0); // Default to New Moon

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your API endpoint
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    // Filtered data based on search, category, temperature, and selected phase
    const filteredData = data.filter(item => 
        (selectedCategory === '' || item.category === selectedCategory) &&
        (item.temp >= temperatureRange[0] && item.temp <= temperatureRange[1]) &&
        (item.phase === selectedPhase) && // Filter by selected moon phase
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Moon Phase Data</h1>
            <SummaryStats data={data} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Filters 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                temperatureRange={temperatureRange} 
                setTemperatureRange={setTemperatureRange} 
                selectedPhase={selectedPhase} 
                setSelectedPhase={setSelectedPhase} 
            />
            <div>
                {filteredData.map(item => (
                    <div key={item.id}>{item.name} - {item.temp} °F</div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
