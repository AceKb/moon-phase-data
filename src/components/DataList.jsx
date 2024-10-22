import React from 'react';

const DataList = ({ moonData }) => {
    return (
        <div className="data-list">
            <h3>Moon Phase Data</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temperature</th>
                        <th>Moon Rise</th>
                        <th>Moon Set</th>
                        <th>Moon Phase</th>
                    </tr>
                </thead>
                <tbody>
                    {moonData.length > 0 ? (
                        moonData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.date}</td>
                                <td>{data.temperature}</td>
                                <td>{data.moonRise}</td>
                                <td>{data.moonSet}</td>
                                <td>{data.moonPhase}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataList;
