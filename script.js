// filepath: C:/Users/ayden/OneDrive/Pictures/Website/bnn/script.js

// This script will handle the search functionality for the BNN Christian Youth website.

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value.trim().toLowerCase();
    const state = document.getElementById('state').value;
    const church = document.getElementById('church').value.trim().toLowerCase();

    // Mock dataset of youth members, includes name, state, connected church, bio, and method of contact
    // In a real application, this data would likely come from a database or API
    const youthMembers = [
        { name: 'John Doe', state: 'WA', church: "Thurston Community Baptist", bio: 'John is a youth leader in Washington.', contact: '541-111-1111' },
        { name: 'Jane Smith', state: 'OR', church: "Thurston Community Baptist", bio: 'Jane is passionate about community service in Oregon.', contact: '541-111-1111' },
        { name: 'Emily Johnson', state: 'ID', church: "Thurston Community Baptist", bio: 'Emily enjoys organizing youth events in Idaho.', contact: '541-111-1111' },
        { name: 'Michael Brown', state: 'CA', church: "Californian Community Baptist", bio: 'Michael is involved in music ministry in California.', contact: '541-111-1111' },
        { name: 'Sarah Davis', state: 'NV', church: "Thurston Community Baptist", bio: 'Sarah loves mentoring young Christians in Nevada.', contact: '541-111-1111' },
        { name: "Lydia Schellenberg", state: "OR", church: "Thurston Community Baptist", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim ante sit amet semper rhoncus. Nullam commodo blandit porttitor. Praesent ligula felis, laoreet non mattis vitae, sodales non ipsum. Cras facilisis tincidunt purus, et posuere purus lacinia ut. Curabitur ac lobortis elit, at ullamcorper tortor. Quisque rhoncus sem a nibh scelerisque venenatis. Praesent imperdiet ante vel volutpat facilisis. Aliquam vestibulum sem hendrerit mauris ullamcorper semper. Cras vulputate nisl a dui viverra eleifend. Duis sapien justo, eleifend in quam vitae, dapibus volutpat ante. Suspendisse rutrum eros quis tellus mollis euismod. Integer posuere massa ut efficitur varius. Cras quis arcu interdum, luctus dui sit amet, maximus ligula. Nullam eget lacus eget elit auctor lacinia.", contact: '541-111-1111' }
    ];

    // Filter the dataset based on the search criteria
    const results = youthMembers.filter(member => {
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
                <h3>${member.name}</h3>
                <h4>State: ${member.state}</h4>

                <div class="bio" style="display: none; style="flex-direction: row;"">
                    <div style="display: flex;" class="member-info">
                        <div>
                            <img src="https://placehold.co/300" alt="${member.name}" class="member-image"> 
                        </div>
                        <div style="display: flex; flex-direction: column;">
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