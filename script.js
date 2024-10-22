document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
    const phaseSlider = document.getElementById('phase-slider');

    function updateTime() {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        timeElement.textContent = formattedTime;
    }

    setInterval(updateTime, 1000);

    const moonData = [
        { date: '2024-10-21', temp: '56.1 °F', rise: '21:06:54', set: '09:06:54', phase: '🌖' },
        { date: '2024-10-22', temp: '61.1 °F', rise: '22:10:26', set: '10:10:26', phase: '🌖' },
        { date: '2024-10-23', temp: '60 °F', rise: '23:18:07', set: '11:18:07', phase: '🌖' },
        { date: '2024-10-24', temp: '53.1 °F', rise: '00:00:00', set: '12:00:00', phase: '🌗' },
        { date: '2024-10-25', temp: '45.1 °F', rise: '00:24:59', set: '13:24:59', phase: '🌘' },
        { date: '2024-10-26', temp: '53.9 °F', rise: '01:30:40', set: '14:30:40', phase: '🌘' },
        { date: '2024-10-27', temp: '42.5 °F', rise: '02:32:51', set: '15:32:51', phase: '🌘' },
        { date: '2024-10-28', temp: '37.8 °F', rise: '03:33:57', set: '16:33:57', phase: '🌘' },
        { date: '2024-10-29', temp: '46.4 °F', rise: '04:33:02', set: '17:33:02', phase: '🌘' },
        { date: '2024-10-30', temp: '55.5 °F', rise: '05:33:07', set: '18:33:07', phase: '🌘' },
        { date: '2024-10-31', temp: '61.8 °F', rise: '06:33:17', set: '19:33:17', phase: '🌘' },
        { date: '2024-11-01', temp: '53.7 °F', rise: '07:36:10', set: '20:36:10', phase: '🌑' },
        { date: '2024-11-02', temp: '51.9 °F', rise: '08:39:57', set: '21:39:57', phase: '🌒' },
        { date: '2024-11-03', temp: '52.1 °F', rise: '08:45:31', set: '21:45:31', phase: '🌒' },
        { date: '2024-11-04', temp: '51.5 °F', rise: '09:49:18', set: '22:49:18', phase: '🌒' }
    ];

    const tableBody = document.querySelector('tbody');

    function populateTable(data) {
        tableBody.innerHTML = '';
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.date}</td>
                <td>${row.temp}</td>
                <td>${row.rise || 'N/A'}</td>
                <td>${row.set || 'N/A'}</td>
                <td>${row.phase}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    populateTable(moonData);

    document.getElementById('search-button').addEventListener('click', () => {
        const dateInput = document.getElementById('date-input').value;
        const filteredData = dateInput 
            ? moonData.filter(row => row.date === dateInput) 
            : moonData;
        populateTable(filteredData);
    });

    phaseSlider.addEventListener('input', () => {
        const selectedPhase = Number(phaseSlider.value);
        const phaseMapping = ['🌑', '🌒', '🌖', '🌗']; // Update this as per your moon phases
        const filteredData = moonData.filter(row => row.phase === phaseMapping[selectedPhase]);
        populateTable(filteredData);
    });
});
// Get the temperature slider and the element displaying the temperature
const tempSlider = document.getElementById('temp-slider');
const tempDisplay = document.getElementById('temp-display'); // Select by ID

// Set initial value to match the slider value
tempDisplay.textContent = tempSlider.value + '°'; // Append degree symbol

// Add an event listener to the slider to update the displayed temperature
tempSlider.addEventListener('input', (event) => {
    const temperature = event.target.value; // Get the current value of the slider
    tempDisplay.textContent = temperature + '°'; // Update the temperature display with degree symbol
});
