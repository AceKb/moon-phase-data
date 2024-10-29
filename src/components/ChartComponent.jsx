// src/components/ChartComponent.jsx
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const ChartComponent = ({ moonPhaseData }) => {
  const tempChartRef = useRef(null);
  const moonPhaseChartRef = useRef(null);

  useEffect(() => {
    const tempChartContext = tempChartRef.current.getContext('2d');
    const moonPhaseChartContext = moonPhaseChartRef.current.getContext('2d');

    const labels = moonPhaseData.map(data => data.date);
    const temperatures = moonPhaseData.map(data => parseFloat(data.temperature));

    // Draw temperature chart
    new Chart(tempChartContext, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature (°F)',
          data: temperatures,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Draw moon phase chart
    const phases = moonPhaseData.map(data => data.phase);
    const phaseCounts = phases.reduce((acc, phase) => {
      acc[phase] = (acc[phase] || 0) + 1;
      return acc;
    }, {});

    const chartLabels = Object.keys(phaseCounts);
    const chartData = Object.values(phaseCounts);

    new Chart(moonPhaseChartContext, {
      type: 'bar',
      data: {
        labels: chartLabels,
        datasets: [{
          label: 'Moon Phases',
          data: chartData,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }, [moonPhaseData]);

  return (
    <div>
      <canvas id="temp-chart" ref={tempChartRef}></canvas>
      <canvas id="moon-phase-chart" ref={moonPhaseChartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
