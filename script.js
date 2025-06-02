// filepath: C:/Users/ayden/OneDrive/Pictures/Website/bnn/script.js

// This script will handle the search functionality for the BNN Christian Youth website.

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value.trim().toLowerCase();
    const state = document.getElementById('state').value;
    const church = document.getElementById('church').value.trim().toLowerCase();

    // Fetch youth members data from the JSON file
    let members = [];
    fetch('./members.json')
        .then(response => response.json())
        .then(data => {
            const members = data;


        // Filter the dataset based on the search criteria
        const results = members.filter(member => {
            const matchesName = name ? member.name.toLowerCase().includes(name) : true;
            const matchesState = state ? member.state === state : true;
            const matchesChurch = church ? member.church.toLowerCase().includes(church) : true;
            return matchesName && matchesState && matchesChurch;
        });

        // Display the results
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Clear previous results

        if (results.length > 0) {
            results.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.classList.add('member');
                memberElement.innerHTML = `
                    <div class="member-title">
                        <h3>${member.name}</h3>
                        <!-- <h4>State: ${member.state}</h4> --!>
                    </div>
                    <div class="bio" style="display: none; style="flex-direction: row;"">
                        <div style="display: flex;" class="member-info">
                            <div>
                                <img src="https://placehold.co/300" alt="${member.name}" class="member-image"> 
                            </div>
                            <div style="display: flex; flex-direction: column; margin-left: 1rem;">
                                <p><strong>Connected Church:</strong> ${member.church}</p>   
                                <br>                    
                                <p id="bioText">${member.bio}</p>
                                <br>
                                <p><strong>Contact:</strong> ${member.contact}</p>
                            </div>
                        </div>
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

})
.catch(error => {
    console.error('Error fetching members data:', error);
});