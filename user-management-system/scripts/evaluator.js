// Search functionality
function searchFunction() {
    let input = document.getElementById('search-input');
    let filter = input.value.toLowerCase();
    let leaderboardTable = document.getElementById('leaderboard-table');

    let rows = leaderboardTable.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        let teamName = cells[1].textContent || cells[1].innerText;
        if (teamName.toLowerCase().indexOf(filter) > -1) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

// Save the edited score in the leaderboard
function saveScore(button) {
    let row = button.closest('tr');
    let scoreInput = row.querySelector('.score-input');
    alert("Score for " + row.cells[1].textContent + " has been saved: " + scoreInput.value);
    // Add logic to persist the score in a database or server here
}

// Upload and display file data
function uploadFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fileData = event.target.result;
            const fileExtension = file.name.split('.').pop().toLowerCase();

            // If the file is CSV or JSON, process it
            if (fileExtension === 'csv') {
                displayCSVData(fileData);
            } else if (fileExtension === 'json') {
                displayJSONData(JSON.parse(fileData));
            } else {
                alert("Invalid file format. Please upload a .csv or .json file.");
            }
        };
        reader.readAsText(file);
    }
}

// Function to display CSV data
function displayCSVData(data) {
    const lines = data.split('\n');
    const tableBody = document.getElementById('uploaded-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';  // Clear any previous data

    lines.forEach(line => {
        const cells = line.split(',');
        const row = tableBody.insertRow();
        cells.forEach(cell => {
            const cellElement = row.insertCell();
            cellElement.textContent = cell.trim();
        });
    });

    document.getElementById('file-data').style.display = 'block';
}

// Function to display JSON data
function displayJSONData(data) {
    const tableBody = document.getElementById('uploaded-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';  // Clear any previous data

    data.forEach(entry => {
        const row = tableBody.insertRow();
        const teamCell = row.insertCell(0);
        teamCell.textContent = entry.teamName;
        const scoreCell = row.insertCell(1);
        scoreCell.textContent = entry.score;
    });

    document.getElementById('file-data').style.display = 'block';
}
