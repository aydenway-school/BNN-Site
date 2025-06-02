// filepath: C:/Users/ayden/OneDrive/Pictures/Website/bnn/script.js

// This script will handle the search functionality for the BNN Christian Youth website.

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value.trim().toLowerCase();
    const state = document.getElementById('state').value;

    // Mock dataset of youth members
    const youthMembers = [
        { name: 'John Doe', state: 'WA', bio: 'John is a youth leader in Washington.' },
        { name: 'Jane Smith', state: 'OR', bio: 'Jane is passionate about community service in Oregon.' },
        { name: 'Emily Johnson', state: 'ID', bio: 'Emily enjoys organizing youth events in Idaho.' },
        { name: 'Michael Brown', state: 'CA', bio: 'Michael is involved in music ministry in California.' },
        { name: 'Sarah Davis', state: 'NV', bio: 'Sarah loves mentoring young Christians in Nevada.' }
    ];

    // Filter the dataset based on the search criteria
    const results = youthMembers.filter(member => {
        const matchesName = name ? member.name.toLowerCase().includes(name) : true;
        const matchesState = state ? member.state === state : true;
        return matchesName && matchesState;
    });

    // Display the results
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length > 0) {
        results.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member');
            memberElement.innerHTML = `
                <div 
                >
                    <h3>${member.name}</h3>
                    <h4>State: ${member.state}</h4>
                </div>
                <div class="bio" style="display: none;">
                    <p id="bioText">${member.bio}</p>
                </div>
            `;

            // Add click event listener to toggle bio visibility
            memberElement.addEventListener('click', function () {
                const bioElement = memberElement.querySelector('.bio');
                const isVisible = bioElement.style.display === 'block';

                if (isVisible) {
                    bioElement.style.display = 'none';
                    memberElement.style.background = '#c84735'; // Reset to orange
                    memberElement.style.color = '#ffffff'; // Reset text color
                    memberElement.style.border = 'none'; // Remove border
                } else {
                    bioElement.style.display = 'block';
                    memberElement.style.background = 'none'; // Remove background
                    memberElement.style.border = '1px solid #ccc'; // Add border
                }
            });

            resultsContainer.appendChild(memberElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No matching members found.</p>';
    }
});

// Create a container for displaying search results
document.addEventListener('DOMContentLoaded', function() {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsContent = document.createElement('div');
    resultsContent.id = 'resultsContent';
    resultsContainer.appendChild(resultsContent);
});