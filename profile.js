// Get professor ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const professorId = parseInt(urlParams.get('id'));

// Get professor data from localStorage
const professors = JSON.parse(localStorage.getItem('professors')) || [];
const professor = professors.find(p => p.id === professorId);

if (!professor) {
    window.location.href = 'index.html';
    exit();
}

// Update page title
document.title = `${professor.name} | Professor Ratings`;

// Function to generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Function to update rating value display
function updateRatingValue(input, valueDisplay) {
    valueDisplay.textContent = input.value;
}

// Function to handle rating submission
function handleRatingSubmit() {
    const attendance = parseInt(document.getElementById('attendance').value);
    const clarity = parseInt(document.getElementById('clarity').value);
    const communication = parseInt(document.getElementById('communication').value);
    const comment = document.getElementById('comment').value.trim();

    if (!comment) {
        alert('Please provide a comment with your rating.');
        return;
    }

    // Create new rating object
    const newRating = {
        attendance,
        clarity,
        communication,
        comment,
        date: new Date().toISOString()
    };

    // Update professor's ratings
    professor.ratings.push(newRating);

    // Update average ratings
    professor.avgAttendance = professor.ratings.reduce((sum, r) => sum + r.attendance, 0) / professor.ratings.length;
    professor.avgClarity = professor.ratings.reduce((sum, r) => sum + r.clarity, 0) / professor.ratings.length;
    professor.avgCommunication = professor.ratings.reduce((sum, r) => sum + r.communication, 0) / professor.ratings.length;
    professor.overallRating = (professor.avgAttendance + professor.avgClarity + professor.avgCommunication) / 3;

    // Save updated data to localStorage
    localStorage.setItem('professors', JSON.stringify(professors));

    // Show success message and redirect
    alert('Thank you for your rating!');
    window.location.reload();
}

// Generate and display professor profile
function displayProfessorProfile() {
    const profileContainer = document.getElementById('professorProfile');
    
    const profileHTML = `
        <div class="profile-header">
            <img src="${professor.image}" alt="${professor.name}">
            <h2>${professor.name}</h2>
            <p>${professor.branch} • ${professor.experience} years of experience</p>
            <div class="star-rating">
                ${generateStarRating(professor.overallRating)}
                <span class="rating-count">(${professor.ratings.length} ratings)</span>
            </div>
            <div class="research-tag">
                <i class="fas fa-flask"></i>
                Research Focus: ${professor.research}
            </div>
            <div class="professor-subjects">
                ${professor.subjects.map(subject => `
                    <span class="subject-tag">${subject}</span>
                `).join('')}
            </div>
        </div>

        <div class="metrics-container">
            <div class="metric-box">
                <div class="metric-label">Attendance</div>
                <div class="metric-bar-container">
                    <div class="metric-bar" style="width: ${professor.avgAttendance * 10}%; background: var(--success)"></div>
                </div>
                <div class="metric-value">${professor.avgAttendance.toFixed(1)}/10</div>
            </div>
            <div class="metric-box">
                <div class="metric-label">Clarity</div>
                <div class="metric-bar-container">
                    <div class="metric-bar" style="width: ${professor.avgClarity * 10}%; background: var(--warning)"></div>
                </div>
                <div class="metric-value">${professor.avgClarity.toFixed(1)}/10</div>
            </div>
            <div class="metric-box">
                <div class="metric-label">Communication</div>
                <div class="metric-bar-container">
                    <div class="metric-bar" style="width: ${professor.avgCommunication * 10}%; background: var(--secondary)"></div>
                </div>
                <div class="metric-value">${professor.avgCommunication.toFixed(1)}/10</div>
            </div>
        </div>

        <div class="comments-section">
            <h3><i class="fas fa-comments"></i> Student Reviews</h3>
            ${professor.ratings.map(rating => `
                <div class="comment">
                    <div class="star-rating">
                        ${generateStarRating((rating.attendance + rating.clarity + rating.communication) / 3)}
                    </div>
                    <p>${rating.comment}</p>
                    <small style="color: var(--text-light);">
                        ${new Date(rating.date).toLocaleDateString()}
                    </small>
                </div>
            `).join('')}
        </div>
    `;

    profileContainer.innerHTML = profileHTML;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProfessorProfile();

    // Add event listeners for rating inputs
    const ratingInputs = document.querySelectorAll('.rating-input input[type="range"]');
    ratingInputs.forEach(input => {
        const valueDisplay = input.previousElementSibling.querySelector('.rating-value');
        input.addEventListener('input', () => updateRatingValue(input, valueDisplay));
    });

    // Add event listener for submit button
    document.getElementById('submitRating').addEventListener('click', handleRatingSubmit);
}); 