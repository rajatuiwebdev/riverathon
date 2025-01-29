// Search functionality
function searchFunction() {
    let input = document.getElementById('search-input');
    let filter = input.value.toLowerCase();
    let leaderboardTable = document.getElementById('leaderboard-table');
    let submissionTable = document.getElementById('submission-table');
    let teamInfo = document.getElementById('team-info');

    // Filter leaderboard
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

    // Filter submission table
    rows = submissionTable.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        let submissionTeam = cells[0].textContent || cells[0].innerText;
        if (submissionTeam.toLowerCase().indexOf(filter) > -1) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }

    // Filter team info dynamically
    if (filter) {
        teamInfo.innerHTML = `Showing results for "${filter}"...`; 
    } else {
        teamInfo.innerHTML = ''; 
    }
}
