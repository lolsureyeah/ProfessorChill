// Sample data - in a real app, this would come from a backend
let professors = [
    {
      id: 1,
      name: "Dr. Aisha Sharma",
      image: "https://i.pravatar.cc/300?img=5",
      branch: "Biotechnology",
      subjects: ["Genetic Engineering", "Biochemistry", "Cell Biology"],
      ratings: {
        attendance: [9, 8, 10],
        clarity: [8, 9, 7],
        communication: [9, 9, 8],
      },
      comments: [
        "Excellent at explaining complex biological concepts",
        "Very helpful during lab sessions",
      ],
      research: true,
    },
    {
      id: 2,
      name: "Prof. Rajiv Mehta",
      image: "https://i.pravatar.cc/300?img=12",
      branch: "Chemical Engineering",
      subjects: [
        "Process Control",
        "Thermodynamics",
        "Chemical Reaction Engineering",
      ],
      ratings: {
        attendance: [8, 7, 9],
        clarity: [9, 8, 9],
        communication: [8, 8, 7],
      },
      comments: [
        "Makes complex chemical principles easy to understand",
        "Great at connecting theory with industrial applications",
      ],
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      image: "https://i.pravatar.cc/300?img=9",
      branch: "Computer Science & Engineering",
      subjects: ["Data Structures", "Algorithms", "Machine Learning"],
      ratings: {
        attendance: [10, 9, 10],
        clarity: [9, 9, 10],
        communication: [8, 9, 9],
      },
      comments: [
        "Exceptional teaching style",
        "Very approachable and explains concepts clearly",
      ],
      research: true,
    },
    {
      id: 4,
      name: "Prof. Vikram Singh",
      image: "https://i.pravatar.cc/300?img=15",
      branch: "Electrical & Electronics Engineering",
      subjects: ["Power Systems", "Control Systems", "Electric Drives"],
      ratings: {
        attendance: [7, 8, 7],
        clarity: [8, 7, 8],
        communication: [9, 8, 9],
      },
      comments: [
        "Practical approach to teaching",
        "Excellent lab demonstrations",
      ],
    },
    {
      id: 5,
      name: "Dr. Ananya Gupta",
      image: "https://i.pravatar.cc/300?img=20",
      branch: "Electronics & Communication Engineering",
      subjects: [
        "Digital Signal Processing",
        "Communication Systems",
        "Microwave Engineering",
      ],
      ratings: {
        attendance: [9, 9, 8],
        clarity: [10, 9, 9],
        communication: [8, 9, 10],
      },
      comments: [
        "Makes complex topics easy to grasp",
        "Great at explaining mathematical concepts",
      ],
      research: true,
    },
    {
      id: 6,
      name: "Prof. Sanjay Verma",
      image: "https://i.pravatar.cc/300?img=11",
      branch: "Mechanical Engineering",
      subjects: ["Fluid Mechanics", "Heat Transfer", "Machine Design"],
      ratings: {
        attendance: [8, 9, 8],
        clarity: [9, 8, 9],
        communication: [7, 8, 9],
      },
      comments: [
        "Excellent practical examples",
        "Very knowledgeable about industry standards",
      ],
    },
    {
      id: 7,
      name: "Dr. Kavita Reddy",
      image: "https://i.pravatar.cc/300?img=25",
      branch: "Civil Engineering",
      subjects: [
        "Structural Analysis",
        "Geotechnical Engineering",
        "Transportation Engineering",
      ],
      ratings: {
        attendance: [10, 9, 9],
        clarity: [8, 9, 8],
        communication: [9, 8, 9],
      },
      comments: [
        "Great at explaining real-world applications",
        "Brings practical experience to the classroom",
      ],
      research: true,
    },
    {
      id: 8,
      name: "Prof. Arjun Nair",
      image: "https://i.pravatar.cc/300?img=17",
      branch: "Aeronautical Engineering",
      subjects: ["Aerodynamics", "Aircraft Structures", "Flight Mechanics"],
      ratings: {
        attendance: [9, 8, 9],
        clarity: [10, 9, 10],
        communication: [8, 9, 8],
      },
      comments: [
        "Passionate about the subject",
        "Makes complex aeronautical concepts understandable",
      ],
    },
    {
      id: 9,
      name: "Dr. Neha Khanna",
      image: "https://i.pravatar.cc/300?img=23",
      branch: "Mathematics and Computing",
      subjects: [
        "Discrete Mathematics",
        "Numerical Methods",
        "Optimization Techniques",
      ],
      ratings: {
        attendance: [9, 10, 9],
        clarity: [10, 9, 10],
        communication: [9, 9, 10],
      },
      comments: [
        "Exceptional at breaking down complex mathematical concepts",
        "Very patient with students",
      ],
      research: true,
    },
    {
      id: 10,
      name: "Prof. Rahul Desai",
      image: "https://i.pravatar.cc/300?img=13",
      branch: "VLSI Design and Technology",
      subjects: [
        "Digital IC Design",
        "Analog Circuit Design",
        "Semiconductor Devices",
      ],
      ratings: {
        attendance: [8, 9, 8],
        clarity: [9, 8, 9],
        communication: [8, 8, 9],
      },
      comments: [
        "Great industry connections",
        "Provides practical insights into VLSI design",
      ],
    },
    {
      id: 11,
      name: "Dr. Suresh Kumar",
      image: "https://i.pravatar.cc/300?img=18",
      branch: "Cyber Physical Systems",
      subjects: ["IoT Architecture", "Embedded Systems", "Real-time Systems"],
      ratings: {
        attendance: [9, 8, 9],
        clarity: [8, 9, 8],
        communication: [9, 8, 9],
      },
      comments: [
        "Excellent hands-on projects",
        "Great at explaining system integration concepts",
      ],
      research: true,
    },
    {
      id: 12,
      name: "Prof. Meera Iyer",
      image: "https://i.pravatar.cc/300?img=29",
      branch: "Biomedical Engineering",
      subjects: ["Medical Imaging", "Biomechanics", "Biomedical Instrumentation"],
      ratings: {
        attendance: [10, 9, 10],
        clarity: [9, 9, 9],
        communication: [10, 9, 10],
      },
      comments: [
        "Passionate about medical technology",
        "Excellent at explaining clinical applications",
      ],
    },
  ];
  
  // Initialize the app when DOM is fully loaded
  function initApp() {
    console.log("Initializing professor ratings app");
  
    // Remove any loading indicators
    const loadingEl = document.querySelector(".loading");
    if (loadingEl) {
      loadingEl.remove();
    }
  
    // DOM Elements
    const professorsList = document.getElementById("professorsList");
    const modal = document.getElementById("profileModal");
    const closeBtn = document.querySelector(".close");
    const professorProfile = document.getElementById("professorProfile");
    const submitBtn = document.getElementById("submitRating");
    const searchInput = document.getElementById("searchInput");
  
    // Make sure all required elements exist
    if (
      !professorsList ||
      !modal ||
      !closeBtn ||
      !professorProfile ||
      !submitBtn
    ) {
      console.error("Required DOM elements not found");
      return;
    }
  
    // Calculate average rating
    function calculateAverage(ratings) {
      if (!ratings || ratings.length === 0) return 0;
      return ratings.reduce((a, b) => a + b, 0) / ratings.length;
    }
  
    // Calculate overall rating
    function calculateOverallRating(professor) {
      const attendance = calculateAverage(professor.ratings.attendance);
      const clarity = calculateAverage(professor.ratings.clarity);
      const communication = calculateAverage(professor.ratings.communication);
      return ((attendance + clarity + communication) / 3).toFixed(1);
    }
  
    // Get color based on rating
    function getRatingColor(rating) {
      if (rating >= 8) return "var(--success)";
      if (rating >= 6) return "var(--warning)";
      return "var(--danger)";
    }
  
    // Format date
    function formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    }
  
    // Display professors list
    function displayProfessors(filteredProfessors = null) {
      const professorsToDisplay = filteredProfessors || professors;
  
      if (professorsToDisplay.length === 0) {
        professorsList.innerHTML = `
                  <div class="no-results">
                      <i class="fas fa-search fa-3x"></i>
                      <p>No professors found matching your search.</p>
                  </div>
              `;
        return;
      }
  
      professorsList.innerHTML = professorsToDisplay
        .map((professor) => {
          // Calculate overall rating for star display
          const overall = calculateOverallRating(professor);
          const fullStars = Math.floor(overall / 2); // Convert from 10-scale to 5-star scale
          const hasHalfStar = overall / 2 - fullStars >= 0.5;
  
          // Generate star rating HTML
          let starsHtml = "";
          for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
              starsHtml += '<i class="fas fa-star filled"></i>';
            } else if (i === fullStars && hasHalfStar) {
              starsHtml += '<i class="fas fa-star-half-alt filled"></i>';
            } else {
              starsHtml += '<i class="far fa-star"></i>';
            }
          }
  
          // Randomly assign hiring interns status to some professors
          const isHiring = professor.id % 3 === 0;
  
          return `
              <div class="professor-card ${
                professor.research ? "research-available" : ""
              }" onclick="showProfessorProfile(${professor.id})">
                  <img src="${professor.image}" alt="${
            professor.name
          }" class="professor-image">
                  <div class="professor-info">
                      <h2 class="professor-name">${professor.name}</h2>
                      <p class="professor-branch">${professor.branch}</p>
                      <div class="star-rating">
                          ${starsHtml}
                          <span class="rating-count">(${
                            professor.ratings.attendance.length +
                            professor.ratings.clarity.length
                          } ratings)</span>
                      </div>
                      
                      ${
                        professor.research
                          ? '<div class="research-tag"><i class="fas fa-flask"></i> Research Collaboration</div>'
                          : ""
                      }
                      <div class="professor-subjects">
                          ${professor.subjects
                            .map(
                              (subject) => `
                              <span class="subject-tag">${subject}</span>
                          `
                            )
                            .join("")}
                      </div>
                  </div>
              </div>
          `;
        })
        .join("");
  
      // Animate cards
      animateProfessorCards();
    }
  
    // Show professor profile
    window.showProfessorProfile = function (id) {
      const professor = professors.find((p) => p.id === id);
      if (!professor) {
        console.error("Professor not found:", id);
        return;
      }
  
      const attendance = calculateAverage(professor.ratings.attendance);
      const clarity = calculateAverage(professor.ratings.clarity);
      const communication = calculateAverage(professor.ratings.communication);
      const overall = calculateOverallRating(professor);
  
      // Calculate star rating for display
      const fullStars = Math.floor(overall / 2); // Convert from 10-scale to 5-star scale
      const hasHalfStar = overall / 2 - fullStars >= 0.5;
  
      // Generate star rating HTML
      let starsHtml = "";
      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          starsHtml += '<i class="fas fa-star filled"></i>';
        } else if (i === fullStars && hasHalfStar) {
          starsHtml += '<i class="fas fa-star-half-alt filled"></i>';
        } else {
          starsHtml += '<i class="far fa-star"></i>';
        }
      }
  
      // Randomly assign hiring interns status
      const isHiring = professor.id % 3 === 0;
  
      professorProfile.innerHTML = `
              <div class="profile-header">
                  <img src="${professor.image}" alt="${
        professor.name
      }" class="professor-image">
                  <h2>${professor.name}</h2>
                  <p>${professor.branch}</p>
                  <div class="star-rating modal-stars">
                      ${starsHtml}
                      <span class="rating-count">(${
                        professor.ratings.attendance.length +
                        professor.ratings.clarity.length
                      } ratings)</span>
                  </div>
                  ${
                    isHiring
                      ? '<div class="hiring-tag"><i class="fas fa-user-plus"></i> Hiring Interns</div>'
                      : ""
                  }
                  ${
                    professor.research
                      ? '<div class="research-tag"><i class="fas fa-flask"></i> Research Collaboration</div>'
                      : ""
                  }
                  <div class="professor-subjects modal-subjects">
                      ${professor.subjects
                        .map(
                          (subject) => `
                          <span class="subject-tag">${subject}</span>
                      `
                        )
                        .join("")}
                  </div>
              </div>
              <div class="ratings-display">
                  <h3>Performance Metrics</h3>
                  <div class="metrics-container">
                      <div class="metric-box">
                          <div class="metric-label">Attendance</div>
                          <div class="metric-bar-container">
                              <div class="metric-bar" style="width: ${
                                attendance * 10
                              }%; background: ${getRatingColor(
        attendance
      )}"></div>
                          </div>
                          <div class="metric-value">${attendance.toFixed(
                            1
                          )}/10</div>
                      </div>
                      <div class="metric-box">
                          <div class="metric-label">Clarity</div>
                          <div class="metric-bar-container">
                              <div class="metric-bar" style="width: ${
                                clarity * 10
                              }%; background: ${getRatingColor(clarity)}"></div>
                          </div>
                          <div class="metric-value">${clarity.toFixed(1)}/10</div>
                      </div>
                      <div class="metric-box">
                          <div class="metric-label">Communication</div>
                          <div class="metric-bar-container">
                              <div class="metric-bar" style="width: ${
                                communication * 10
                              }%; background: ${getRatingColor(
        communication
      )}"></div>
                          </div>
                          <div class="metric-value">${communication.toFixed(
                            1
                          )}/10</div>
                      </div>
                  </div>
              </div>
              <div class="comments-section">
                  <h3><i class="fas fa-comment-alt"></i> Student Comments (${
                    professor.comments.length
                  })</h3>
                  ${
                    professor.comments.length > 0
                      ? professor.comments
                          .map(
                            (comment) => `
                      <p class="comment">${comment}</p>
                  `
                          )
                          .join("")
                      : '<p class="no-comments">No comments yet. Be the first to leave a review!</p>'
                  }
              </div>
          `;
  
      // Reset rating inputs
      document.getElementById("attendance").value = 5;
      document.getElementById("clarity").value = 5;
      document.getElementById("communication").value = 5;
      document
        .querySelectorAll(".rating-value")
        .forEach((span) => (span.textContent = 5));
      document.getElementById("comment").value = "";
  
      // Store current professor ID for rating submission
      submitBtn.dataset.professorId = id;
      modal.style.display = "block";
    };
  
    // Close modal
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
  
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  
    // Handle rating submission
    submitBtn.onclick = () => {
      const professorId = parseInt(submitBtn.dataset.professorId);
      const professor = professors.find((p) => p.id === professorId);
  
      if (!professor) {
        console.error("Professor not found for rating submission");
        return;
      }
  
      const attendance = parseInt(document.getElementById("attendance").value);
      const clarity = parseInt(document.getElementById("clarity").value);
      const communication = parseInt(
        document.getElementById("communication").value
      );
      const comment = document.getElementById("comment").value.trim();
  
      if (comment) {
        professor.comments.push(comment);
      }
  
      professor.ratings.attendance.push(attendance);
      professor.ratings.clarity.push(clarity);
      professor.ratings.communication.push(communication);
  
      // Show success message
      alert("Thank you for your rating!");
  
      // Update display
      displayProfessors();
      window.showProfessorProfile(professorId);
  
      // Reset form
      document.getElementById("comment").value = "";
    };
  
    // Search functionality
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
  
        if (searchTerm === "") {
          displayProfessors();
          return;
        }
  
        const filteredProfessors = professors.filter((professor) => {
          const nameMatch = professor.name.toLowerCase().includes(searchTerm);
          const branchMatch = professor.branch.toLowerCase().includes(searchTerm);
          const subjectMatch = professor.subjects.some((subject) =>
            subject.toLowerCase().includes(searchTerm)
          );
  
          return nameMatch || branchMatch || subjectMatch;
        });
  
        displayProfessors(filteredProfessors);
      });
    }
  
    // Initialize sliders
    document.querySelectorAll('input[type="range"]').forEach((input) => {
      input.addEventListener("input", (e) => {
        e.target.nextElementSibling.textContent = e.target.value;
      });
    });
  
    // Add animation class to professor cards
    function animateProfessorCards() {
      const cards = document.querySelectorAll(".professor-card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animate-in");
        }, index * 100);
      });
    }
  
    // Add CSS for animations
    const style = document.createElement("style");
    style.textContent = `
          .search-container {
              display: flex;
              justify-content: center;
              padding: 1.5rem;
          }
          
          .search-box {
              display: flex;
              align-items: center;
              background: white;
              border-radius: 30px;
              padding: 0.75rem 1.5rem;
              width: 100%;
              max-width: 500px;
              box-shadow: 0 4px 10px rgba(30, 136, 229, 0.1);
              border: 1px solid rgba(30, 136, 229, 0.2);
          }
          
          .search-box i {
              color: var(--primary);
              margin-right: 10px;
          }
          
          .search-box input {
              border: none;
              outline: none;
              width: 100%;
              font-size: 1rem;
          }
          
          .subtitle {
              margin-top: 0.5rem;
              font-size: 1.1rem;
              opacity: 0.9;
          }
          
          .no-results {
              grid-column: 1 / -1;
              text-align: center;
              padding: 3rem;
              color: #536878;
          }
          
          .no-results i {
              margin-bottom: 1rem;
              color: var(--primary-light);
          }
          
          .no-comments {
              font-style: italic;
              color: #536878;
              text-align: center;
              padding: 1rem;
          }
          
          .professor-card {
              opacity: 0;
              transform: translateY(20px);
          }
          
          .animate-in {
              animation: fadeIn 0.5s ease forwards;
          }
          
          @keyframes fadeIn {
              from {
                  opacity: 0;
                  transform: translateY(20px);
              }
              to {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
          
          .research-tag {
              background: var(--primary);
              color: white;
              padding: 0.25rem 0.5rem;
              border-radius: 10px;
              font-size: 0.8rem;
              margin-left: 10px;
          }
          
          .research-indicator {
              position: absolute;
              top: 10px;
              right: 10px;
              width: 20px;
              height: 20px;
              background: var(--primary);
              border-radius: 50%;
          }
          
          .research-available {
              border: 2px solid var(--primary);
          }
          
          .star-rating {
              display: flex;
              align-items: center;
              margin-bottom: 10px;
          }
          
          .filled {
              color: var(--primary);
          }
          
          .rating-count {
              margin-left: 10px;
              font-size: 0.8rem;
              color: #536878;
          }
          
          .hiring-tag {
              background: var(--success);
              color: white;
              padding: 0.25rem 0.5rem;
              border-radius: 10px;
              font-size: 0.8rem;
              margin-left: 10px;
          }
          
          .modal-stars {
              margin-top: 10px;
          }
          
          .modal-subjects {
              margin-top: 10px;
          }
          
          .metrics-container {
              display: flex;
              justify-content: space-around;
              margin-top: 20px;
          }
          
          .metric-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 10px;
              box-shadow: 0 4px 10px rgba(30, 136, 229, 0.1);
          }
          
          .metric-label {
              font-size: 1.2rem;
              font-weight: 600;
              margin-bottom: 10px;
          }
          
          .metric-bar-container {
              width: 100%;
              height: 10px;
              background: #ddd;
              border-radius: 10px;
              overflow: hidden;
          }
          
          .metric-bar {
              height: 100%;
              background: var(--primary);
              border-radius: 10px;
          }
          
          .metric-value {
              font-size: 1.2rem;
              font-weight: 600;
              margin-top: 10px;
          }
      `;
    document.head.appendChild(style);
  
    // Initial display
    displayProfessors();
    console.log("App initialized successfully");
  }
  
  // Run initialization
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
  