// Sample data - in a real app, this would come from a backend
let professors = [
    {
      id: 1,
      name: "Dr. Aisha Sharma",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      branch: "Biotechnology",
      subjects: ["Genetic Engineering", "Biochemistry", "Cell Biology"],
        experience: 8,
        research: "Gene Therapy and Molecular Biology",
        ratings: [
            {
                attendance: 9,
                clarity: 8,
                communication: 9,
                comment: "Excellent at explaining complex biological concepts",
                date: "2024-03-15T10:00:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 9,
                comment: "Very helpful during lab sessions",
                date: "2024-03-10T15:30:00Z"
            }
        ]
    },
    {
      id: 2,
      name: "Prof. Rajiv Mehta",
      image: "https://randomuser.me/api/portraits/men/82.jpg",
      branch: "Chemical Engineering",
        subjects: ["Process Control", "Thermodynamics", "Chemical Reaction Engineering"],
        experience: 12,
        research: "Process Optimization and Control Systems",
        ratings: [
            {
                attendance: 8,
                clarity: 9,
                communication: 8,
                comment: "Makes complex chemical principles easy to understand",
                date: "2024-03-18T09:15:00Z"
            },
            {
                attendance: 7,
                clarity: 8,
                communication: 8,
                comment: "Great at connecting theory with industrial applications",
                date: "2024-03-12T14:20:00Z"
            }
        ]
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
      branch: "Computer Science & Engineering",
      subjects: ["Data Structures", "Algorithms", "Machine Learning"],
        experience: 6,
        research: "Artificial Intelligence and Machine Learning",
        ratings: [
            {
                attendance: 10,
                clarity: 9,
                communication: 8,
                comment: "Exceptional teaching style",
                date: "2024-03-20T11:00:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Very approachable and explains concepts clearly",
                date: "2024-03-15T14:30:00Z"
            }
        ]
    },
    {
      id: 4,
      name: "Prof. Vikram Singh",
      image: "https://randomuser.me/api/portraits/men/83.jpg",
      branch: "Electrical & Electronics Engineering",
      subjects: ["Power Systems", "Control Systems", "Electric Drives"],
        experience: 15,
        research: "Power Electronics and Renewable Energy",
        ratings: [
            {
                attendance: 7,
                clarity: 8,
                communication: 9,
                comment: "Practical approach to teaching",
                date: "2024-03-18T09:45:00Z"
            },
            {
                attendance: 8,
                clarity: 7,
                communication: 8,
                comment: "Excellent lab demonstrations",
                date: "2024-03-12T16:20:00Z"
            }
        ]
    },
    {
      id: 5,
      name: "Dr. Ananya Gupta",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
      branch: "Electronics & Communication Engineering",
        subjects: ["Digital Signal Processing", "Communication Systems", "Microwave Engineering"],
        experience: 10,
        research: "Wireless Communication and Signal Processing",
        ratings: [
            {
                attendance: 9,
                clarity: 10,
                communication: 8,
                comment: "Makes complex topics easy to grasp",
                date: "2024-03-19T10:15:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 10,
                comment: "Great at explaining mathematical concepts",
                date: "2024-03-14T13:45:00Z"
            }
        ]
    },
    {
      id: 6,
      name: "Prof. Sanjay Verma",
      image: "https://randomuser.me/api/portraits/men/84.jpg",
      branch: "Mechanical Engineering",
      subjects: ["Fluid Mechanics", "Heat Transfer", "Machine Design"],
        experience: 18,
        research: "Thermal Engineering and Heat Transfer",
        ratings: [
            {
                attendance: 8,
                clarity: 9,
                communication: 7,
                comment: "Excellent practical examples",
                date: "2024-03-17T11:30:00Z"
            },
            {
                attendance: 9,
                clarity: 8,
                communication: 9,
                comment: "Very knowledgeable about industry standards",
                date: "2024-03-11T15:15:00Z"
            }
        ]
    },
    {
      id: 7,
      name: "Dr. Kavita Reddy",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      branch: "Civil Engineering",
        subjects: ["Structural Analysis", "Geotechnical Engineering", "Transportation Engineering"],
        experience: 12,
        research: "Sustainable Infrastructure Development",
        ratings: [
            {
                attendance: 10,
                clarity: 8,
                communication: 9,
                comment: "Great at explaining real-world applications",
                date: "2024-03-16T09:00:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Brings practical experience to the classroom",
                date: "2024-03-13T14:00:00Z"
            }
        ]
    },
    {
      id: 8,
      name: "Prof. Arjun Nair",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      branch: "Aeronautical Engineering",
      subjects: ["Aerodynamics", "Aircraft Structures", "Flight Mechanics"],
        experience: 14,
        research: "Aerospace Materials and Structures",
        ratings: [
            {
                attendance: 9,
                clarity: 10,
                communication: 8,
                comment: "Passionate about the subject",
                date: "2024-03-19T11:45:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 9,
                comment: "Makes complex aeronautical concepts understandable",
                date: "2024-03-15T16:30:00Z"
            }
        ]
    },
    {
      id: 9,
      name: "Dr. Neha Khanna",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
      branch: "Mathematics and Computing",
        subjects: ["Discrete Mathematics", "Numerical Methods", "Optimization Techniques"],
        experience: 7,
        research: "Computational Mathematics and Optimization",
        ratings: [
            {
                attendance: 9,
                clarity: 10,
                communication: 9,
                comment: "Exceptional at breaking down complex mathematical concepts",
                date: "2024-03-18T10:30:00Z"
            },
            {
                attendance: 10,
                clarity: 9,
                communication: 10,
                comment: "Very patient with students",
                date: "2024-03-12T13:15:00Z"
            }
        ]
    },
    {
      id: 10,
      name: "Prof. Rahul Desai",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      branch: "VLSI Design and Technology",
        subjects: ["Digital IC Design", "Analog Circuit Design", "Semiconductor Devices"],
        experience: 16,
        research: "VLSI Design and Semiconductor Technology",
        ratings: [
            {
                attendance: 8,
                clarity: 9,
                communication: 8,
                comment: "Great industry connections",
                date: "2024-03-17T09:15:00Z"
            },
            {
                attendance: 9,
                clarity: 8,
                communication: 9,
                comment: "Provides practical insights into VLSI design",
                date: "2024-03-14T15:45:00Z"
            }
        ]
    },
    {
      id: 11,
      name: "Dr. Suresh Kumar",
      image: "https://randomuser.me/api/portraits/men/87.jpg",
      branch: "Cyber Physical Systems",
      subjects: ["IoT Architecture", "Embedded Systems", "Real-time Systems"],
        experience: 9,
        research: "IoT and Cyber-Physical Systems",
        ratings: [
            {
                attendance: 9,
                clarity: 8,
                communication: 9,
                comment: "Excellent hands-on projects",
                date: "2024-03-20T10:00:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 8,
                comment: "Great at explaining system integration concepts",
                date: "2024-03-16T14:30:00Z"
            }
        ]
    },
    {
      id: 12,
      name: "Prof. Meera Iyer",
      image: "https://randomuser.me/api/portraits/women/57.jpg",
      branch: "Biomedical Engineering",
      subjects: ["Medical Imaging", "Biomechanics", "Biomedical Instrumentation"],
        experience: 11,
        research: "Medical Imaging and Biomechanics",
        ratings: [
            {
                attendance: 10,
                clarity: 9,
                communication: 10,
                comment: "Passionate about medical technology",
                date: "2024-03-19T09:30:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining clinical applications",
                date: "2024-03-13T16:00:00Z"
            }
        ]
    },
    {
        id: 13,
        name: "Dr. Amit Kumar",
        image: "https://randomuser.me/api/portraits/men/88.jpg",
        branch: "Computer Science & Engineering",
        subjects: ["Computer Networks", "Cloud Computing", "Cybersecurity"],
        experience: 9,
        research: "Network Security and Cloud Computing",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Great at explaining network concepts",
                date: "2024-03-20T10:30:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 9,
                comment: "Practical approach to cybersecurity",
                date: "2024-03-15T14:45:00Z"
            }
        ]
    },
    {
        id: 14,
        name: "Prof. Deepika Sharma",
        image: "https://randomuser.me/api/portraits/women/58.jpg",
        branch: "Electronics & Communication Engineering",
        subjects: ["VLSI Design", "Digital Electronics", "Microprocessors"],
        experience: 13,
        research: "VLSI Design and Digital Systems",
        ratings: [
            {
                attendance: 9,
                clarity: 10,
                communication: 9,
                comment: "Excellent at teaching digital electronics",
                date: "2024-03-19T11:15:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Very knowledgeable about VLSI",
                date: "2024-03-14T15:30:00Z"
            }
        ]
    },
    {
        id: 15,
        name: "Dr. Rahul Verma",
        image: "https://randomuser.me/api/portraits/men/89.jpg",
        branch: "Mechanical Engineering",
        subjects: ["Robotics", "Control Systems", "Mechatronics"],
        experience: 10,
        research: "Robotics and Automation",
        ratings: [
            {
                attendance: 8,
                clarity: 9,
                communication: 9,
                comment: "Great at explaining robotics concepts",
                date: "2024-03-18T09:45:00Z"
            },
            {
                attendance: 9,
                clarity: 8,
                communication: 9,
                comment: "Excellent practical demonstrations",
                date: "2024-03-13T16:15:00Z"
            }
        ]
    },
    {
        id: 16,
        name: "Prof. Anjali Gupta",
        image: "https://randomuser.me/api/portraits/women/59.jpg",
        branch: "Civil Engineering",
        subjects: ["Structural Design", "Construction Management", "Environmental Engineering"],
        experience: 15,
        research: "Sustainable Construction Materials",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining structural concepts",
                date: "2024-03-20T10:00:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Great industry experience",
                date: "2024-03-15T14:30:00Z"
            }
        ]
    },
    {
        id: 17,
        name: "Dr. Vikram Patel",
        image: "https://randomuser.me/api/portraits/men/90.jpg",
        branch: "Aeronautical Engineering",
        subjects: ["Aircraft Design", "Propulsion Systems", "Aerospace Materials"],
        experience: 12,
        research: "Aircraft Propulsion Systems",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining aircraft systems",
                date: "2024-03-19T11:45:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 9,
                comment: "Great practical knowledge",
                date: "2024-03-14T15:45:00Z"
            }
        ]
    },
    {
        id: 18,
        name: "Prof. Neha Singh",
        image: "https://randomuser.me/api/portraits/women/60.jpg",
        branch: "Mathematics and Computing",
        subjects: ["Linear Algebra", "Probability Theory", "Optimization"],
        experience: 8,
        research: "Mathematical Optimization",
        ratings: [
            {
                attendance: 9,
                clarity: 10,
                communication: 9,
                comment: "Exceptional at teaching mathematics",
                date: "2024-03-18T10:15:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Very patient with students",
                date: "2024-03-13T16:30:00Z"
            }
        ]
    },
    {
        id: 19,
        name: "Dr. Arjun Reddy",
        image: "https://randomuser.me/api/portraits/men/91.jpg",
        branch: "VLSI Design and Technology",
        subjects: ["Analog IC Design", "RF Circuits", "Semiconductor Physics"],
        experience: 11,
        research: "RF Circuit Design",
        ratings: [
            {
                attendance: 8,
                clarity: 9,
                communication: 8,
                comment: "Great at explaining circuit concepts",
                date: "2024-03-20T09:30:00Z"
            },
            {
                attendance: 9,
                clarity: 8,
                communication: 9,
                comment: "Excellent practical knowledge",
                date: "2024-03-15T14:15:00Z"
            }
        ]
    },
    {
        id: 20,
        name: "Prof. Priya Kumar",
        image: "https://randomuser.me/api/portraits/women/61.jpg",
        branch: "Cyber Physical Systems",
        subjects: ["Embedded Systems", "Real-time Operating Systems", "System Integration"],
        experience: 9,
        research: "Embedded Systems Design",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at teaching embedded systems",
                date: "2024-03-19T10:45:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 8,
                comment: "Great practical approach",
                date: "2024-03-14T15:15:00Z"
            }
        ]
    },
    {
        id: 21,
        name: "Dr. Sanjay Iyer",
        image: "https://randomuser.me/api/portraits/men/92.jpg",
        branch: "Biomedical Engineering",
        subjects: ["Medical Devices", "Biomechanics", "Biomedical Signal Processing"],
        experience: 13,
        research: "Medical Device Design",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining medical concepts",
                date: "2024-03-18T11:00:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Great industry connections",
                date: "2024-03-13T16:45:00Z"
            }
        ]
    },
    {
        id: 22,
        name: "Prof. Ravi Sharma",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
        branch: "Computer Science & Engineering",
        subjects: ["Artificial Intelligence", "Deep Learning", "Computer Vision"],
        experience: 10,
        research: "Computer Vision and AI",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at teaching AI concepts",
                date: "2024-03-20T10:15:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Great practical examples",
                date: "2024-03-15T14:45:00Z"
            }
        ]
    },
    {
        id: 23,
        name: "Dr. Ananya Reddy",
        image: "https://randomuser.me/api/portraits/women/62.jpg",
        branch: "Electronics & Communication Engineering",
        subjects: ["Wireless Communication", "Digital Signal Processing", "RF Engineering"],
        experience: 11,
        research: "Wireless Communication Systems",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining communication concepts",
                date: "2024-03-19T11:30:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 9,
                comment: "Great practical knowledge",
                date: "2024-03-14T15:30:00Z"
            }
        ]
    },
    {
        id: 24,
        name: "Prof. Vikram Kumar",
        image: "https://randomuser.me/api/portraits/men/94.jpg",
        branch: "Mechanical Engineering",
        subjects: ["Thermal Engineering", "Heat Transfer", "Energy Systems"],
        experience: 14,
        research: "Thermal Energy Systems",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Excellent at explaining thermal concepts",
                date: "2024-03-18T10:45:00Z"
            },
            {
                attendance: 9,
                clarity: 8,
                communication: 9,
                comment: "Great industry experience",
                date: "2024-03-13T16:15:00Z"
            }
        ]
    },
    {
        id: 25,
        name: "Dr. Meera Patel",
        image: "https://randomuser.me/api/portraits/women/63.jpg",
        branch: "Civil Engineering",
        subjects: ["Geotechnical Engineering", "Foundation Design", "Soil Mechanics"],
        experience: 12,
        research: "Geotechnical Engineering",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining geotechnical concepts",
                date: "2024-03-20T09:45:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Great practical knowledge",
                date: "2024-03-15T14:15:00Z"
            }
        ]
    },
    {
        id: 26,
        name: "Prof. Arjun Gupta",
        image: "https://randomuser.me/api/portraits/men/95.jpg",
        branch: "Aeronautical Engineering",
        subjects: ["Aircraft Structures", "Aerodynamics", "Flight Dynamics"],
        experience: 13,
        research: "Aircraft Structures",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining aircraft concepts",
                date: "2024-03-19T11:15:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 9,
                comment: "Great industry experience",
                date: "2024-03-14T15:45:00Z"
            }
        ]
    },
    {
        id: 27,
        name: "Dr. Priya Sharma",
        image: "https://randomuser.me/api/portraits/women/64.jpg",
        branch: "Mathematics and Computing",
        subjects: ["Numerical Methods", "Optimization", "Statistics"],
        experience: 9,
        research: "Mathematical Optimization",
        ratings: [
            {
                attendance: 9,
                clarity: 10,
                communication: 9,
                comment: "Excellent at teaching mathematics",
                date: "2024-03-18T10:30:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Very patient with students",
                date: "2024-03-13T16:30:00Z"
            }
        ]
    },
    {
        id: 28,
        name: "Prof. Rahul Kumar",
        image: "https://randomuser.me/api/portraits/men/96.jpg",
        branch: "VLSI Design and Technology",
        subjects: ["Digital Design", "VLSI Testing", "FPGA Design"],
        experience: 11,
        research: "VLSI Testing",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Excellent at explaining VLSI concepts",
                date: "2024-03-20T10:00:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 9,
                comment: "Great practical knowledge",
                date: "2024-03-15T14:30:00Z"
            }
        ]
    },
    {
        id: 29,
        name: "Dr. Anjali Reddy",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        branch: "Cyber Physical Systems",
        subjects: ["System Integration", "Real-time Systems", "IoT Architecture"],
        experience: 10,
        research: "IoT Systems",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining system concepts",
                date: "2024-03-19T11:45:00Z"
            },
            {
                attendance: 9,
                clarity: 8,
                communication: 9,
                comment: "Great practical approach",
                date: "2024-03-14T15:15:00Z"
            }
        ]
    },
    {
        id: 30,
        name: "Prof. Vikram Patel",
        image: "https://randomuser.me/api/portraits/men/97.jpg",
        branch: "Biomedical Engineering",
        subjects: ["Medical Imaging", "Biomechanics", "Biomedical Instrumentation"],
        experience: 12,
        research: "Medical Imaging Systems",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining medical concepts",
                date: "2024-03-18T11:15:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Great industry connections",
                date: "2024-03-13T16:45:00Z"
            }
        ]
    },
    {
        id: 31,
        name: "Dr. Neha Kumar",
        image: "https://randomuser.me/api/portraits/women/66.jpg",
        branch: "Computer Science & Engineering",
        subjects: ["Software Engineering", "Database Systems", "Web Development"],
        experience: 8,
        research: "Software Engineering",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at teaching software concepts",
                date: "2024-03-20T10:30:00Z"
            },
            {
                attendance: 9,
                clarity: 9,
                communication: 8,
                comment: "Great practical examples",
                date: "2024-03-15T14:45:00Z"
            }
        ]
    },
    {
        id: 32,
        name: "Prof. Rajiv Sharma",
        image: "https://randomuser.me/api/portraits/men/98.jpg",
        branch: "Electronics & Communication Engineering",
        subjects: ["Communication Systems", "Digital Electronics", "Signal Processing"],
        experience: 15,
        research: "Communication Systems",
        ratings: [
            {
                attendance: 9,
                clarity: 9,
                communication: 9,
                comment: "Excellent at explaining communication concepts",
                date: "2024-03-19T11:00:00Z"
            },
            {
                attendance: 8,
                clarity: 9,
                communication: 9,
                comment: "Great industry experience",
                date: "2024-03-14T15:30:00Z"
            }
        ]
    }
  ];
  
  // Initialize the app when DOM is fully loaded
  function initApp() {
    console.log("Initializing professor ratings app");

    // Initialize localStorage with professor data if it doesn't exist
    if (!localStorage.getItem('professors')) {
        // Calculate initial average ratings for each professor
        professors.forEach(professor => {
            professor.avgAttendance = calculateAverage(professor.ratings.map(r => r.attendance));
            professor.avgClarity = calculateAverage(professor.ratings.map(r => r.clarity));
            professor.avgCommunication = calculateAverage(professor.ratings.map(r => r.communication));
            professor.overallRating = (professor.avgAttendance + professor.avgClarity + professor.avgCommunication) / 3;
        });
        
        localStorage.setItem('professors', JSON.stringify(professors));
    } else {
        // Load professors from localStorage
        professors = JSON.parse(localStorage.getItem('professors'));
    }
  
    // Remove any loading indicators
    const loadingEl = document.querySelector(".loading");
    if (loadingEl) {
      loadingEl.remove();
    }
  
    // DOM Elements
    const professorsList = document.getElementById("professorsList");
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const branchFilter = document.getElementById("branchFilter");
  
    // Make sure all required elements exist
    if (
      !professorsList ||
        !searchInput ||
        !sortSelect ||
        !branchFilter
    ) {
      console.error("Required DOM elements not found");
      return;
    }
  
    // Calculate average rating
    function calculateAverage(ratings) {
      if (!ratings || ratings.length === 0) return 0;
      return ratings.reduce((a, b) => a + b, 0) / ratings.length;
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

    // Get unique branches for filter
    const branches = [...new Set(professors.map(p => p.branch))].sort();
    branchFilter.innerHTML = `
        <option value="">All Branches</option>
        ${branches.map(branch => `<option value="${branch}">${branch}</option>`).join('')}
    `;

    // Sort and filter functionality
    function sortAndFilterProfessors(professorsToSort = professors) {
        const sortBy = sortSelect.value;
        const branch = branchFilter.value;
        const searchTerm = searchInput.value.toLowerCase().trim();

        // Filter by branch
        let filtered = branch 
            ? professorsToSort.filter(p => p.branch === branch)
            : professorsToSort;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(professor => {
                const nameWithoutTitle = professor.name.replace(/^(Dr\.|Prof\.)\s+/i, '').toLowerCase();
                return nameWithoutTitle.includes(searchTerm);
            });
        }

        // Sort the filtered results
        switch (sortBy) {
            case 'name-asc':
                filtered.sort((a, b) => {
                    const nameA = a.name.replace(/^(Dr\.|Prof\.)\s+/i, '').toLowerCase();
                    const nameB = b.name.replace(/^(Dr\.|Prof\.)\s+/i, '').toLowerCase();
                    return nameA.localeCompare(nameB);
                });
                break;
            case 'name-desc':
                filtered.sort((a, b) => {
                    const nameA = a.name.replace(/^(Dr\.|Prof\.)\s+/i, '').toLowerCase();
                    const nameB = b.name.replace(/^(Dr\.|Prof\.)\s+/i, '').toLowerCase();
                    return nameB.localeCompare(nameA);
                });
                break;
            case 'rating-high':
                filtered.sort((a, b) => b.overallRating - a.overallRating);
                break;
            case 'rating-low':
                filtered.sort((a, b) => a.overallRating - b.overallRating);
                break;
            case 'experience-high':
                filtered.sort((a, b) => b.experience - a.experience);
                break;
            case 'experience-low':
                filtered.sort((a, b) => a.experience - b.experience);
                break;
        }

        return filtered;
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
                const overall = professor.overallRating;
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
  
          return `
                    <div class="professor-card" onclick="window.open('profile.html?id=${professor.id}', '_blank')">
                        <img src="${professor.image}" alt="${professor.name}">
                  <div class="professor-info">
                            <h3>${professor.name}</h3>
                            <p>${professor.branch}</p>
                            <div class="subjects">
                                ${professor.subjects.map(subject => `
                                    <span class="subject-tag">${subject}</span>
                                `).join('')}
                            </div>
                            <div class="rating">
                      <div class="star-rating">
                          ${starsHtml}
                      </div>
                                <span class="rating-count">(${professor.ratings.length} ratings)</span>
                      </div>
                  </div>
              </div>
          `;
        })
        .join("");
  
      // Animate cards
      animateProfessorCards();
    }
  
    // Update display when sort or filter changes
    sortSelect.addEventListener('change', () => {
        const filteredProfessors = sortAndFilterProfessors();
        displayProfessors(filteredProfessors);
    });

    branchFilter.addEventListener('change', () => {
        const filteredProfessors = sortAndFilterProfessors();
        displayProfessors(filteredProfessors);
    });

    // Update search functionality
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
            const filteredProfessors = sortAndFilterProfessors();
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
        
        .controls-container {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
        }
        
        .control-group {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .control-group label {
            font-weight: 500;
            color: var(--text-secondary);
        }
        
        .control-group select {
            padding: 0.5rem;
            border: 1px solid var(--border-color);
            border-radius: 5px;
            background: white;
            font-size: 0.9rem;
            color: var(--text-primary);
            cursor: pointer;
            min-width: 150px;
        }
        
        .control-group select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(30, 136, 229, 0.1);
        }
        
        @media (max-width: 768px) {
            .controls-container {
                flex-direction: column;
            }
            
            .control-group {
                width: 100%;
            }
            
            .control-group select {
                width: 100%;
            }
        }

        .professor-card img {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              object-fit: cover;
              border: 3px solid var(--primary);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              margin-bottom: 1rem;
          }
          
          .professor-card {
              opacity: 0;
              transform: translateY(20px);
              background: white;
              border-radius: 15px;
              padding: 1.5rem;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
          }
          
          .professor-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          }
          
          .professor-card:hover img {
              transform: scale(1.05);
              transition: transform 0.3s ease;
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
  