function renderTable(data) {
    const tbody = document.getElementById('moon-data');
    tbody.innerHTML = '';
    data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.date}</td>
            <td>${item.temperature}</td>
            <td>${item.moonRise}</td>
            <td>${item.moonSet}</td>
            <td>${item.phase}</td>
            <td><button class="details-button">View Details</button></td>
        `;
        tr.querySelector('.details-button').addEventListener('click', () => {
            showDetails(item);
        });
        tbody.appendChild(tr);
    });
}

function showDetails(item) {
    document.getElementById('details-content').textContent = `
        Date: ${item.date}, 
        Temperature: ${item.temperature}, 
        Moon Rise: ${item.moonRise}, 
        Moon Set: ${item.moonSet}, 
        Phase: ${item.phase}
    `;
    document.getElementById('details-link').href = `https://example.com/moon-phase/${item.date}`; // Replace with actual link
    document.getElementById('details-section').style.display = 'block'; // Show the details section
}

// Call renderTable to populate data initially
renderTable(moonPhaseData);
