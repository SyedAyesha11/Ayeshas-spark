// ======================================================
// AYESHA'S SPARK - MAIN JAVASCRIPT
// ======================================================


// ------------------------------------------------------
// GO TO SPARK GENERATOR
// ------------------------------------------------------
function findSpark() {
    window.location.href = "spark.html";
}


// ------------------------------------------------------
// SCROLL TO PROJECTS
// ------------------------------------------------------
function showProjects() {
    const projects = document.getElementById("projects");

    if (projects) {
        projects.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ------------------------------------------------------
// PROJECT DATA
// ------------------------------------------------------
const sparkData = {

    "Agriculture": {
        sparks: [
            {
                name: "Smart Crop Guardian",
                description: "An intelligent system that monitors crop conditions and helps farmers identify problems at an early stage.",
                technologies: "Python, AI/ML, IoT, Sensors"
            },
            {
                name: "AI Crop Disease Detector",
                description: "A computer vision project that analyzes crop images and helps identify possible plant diseases.",
                technologies: "Python, AI/ML, Computer Vision"
            },
            {
                name: "Smart Irrigation System",
                description: "An IoT-based system that monitors soil conditions and helps optimize water usage for crops.",
                technologies: "IoT, Arduino, Sensors, Python"
            }
        ],
        skills: "Python, AI/ML, IoT, Sensors, Data Analysis",
        modules: "Sensors → Data Collection → Soil Analysis → Prediction → Farmer Dashboard → Testing",
        difficulty: "Beginner–Intermediate",
        time: "4–6 Weeks"
    },


    "Healthcare": {
        sparks: [
            {
                name: "Smart Healthcare Assistant",
                description: "A digital assistant that helps users organize basic health information and provides general wellness guidance.",
                technologies: "Python, AI/ML, HTML, CSS, JavaScript"
            },
            {
                name: "Health Monitoring Dashboard",
                description: "A dashboard that displays health sensor data and helps users observe changes over time.",
                technologies: "Python, IoT, JavaScript, Data Analysis"
            },
            {
                name: "AI Health Information Assistant",
                description: "An AI-based system that helps users find understandable information about common health topics.",
                technologies: "Python, NLP, AI/ML, Flask"
            }
        ],
        skills: "Python, AI/ML, Data Analysis, Computer Vision",
        modules: "Data Collection → Data Processing → AI Model → Information Display → Dashboard → Testing",
        difficulty: "Intermediate",
        time: "5–7 Weeks"
    },


    "Education": {
        sparks: [
            {
                name: "Smart Learning Assistant",
                description: "An intelligent platform that helps students organize learning activities and identify areas where they may need more practice.",
                technologies: "Python, AI/ML, HTML, CSS, JavaScript"
            },
            {
                name: "AI Study Planner",
                description: "A personalized study planner that creates a structured learning schedule based on subjects and available time.",
                technologies: "Python, AI/ML, JavaScript"
            },
            {
                name: "Student Skill Gap Analyzer",
                description: "A system that compares a student's current skills with project requirements and suggests areas to improve.",
                technologies: "Python, AI/ML, Data Analysis"
            }
        ],
        skills: "Python, AI/ML, Web Development, Data Analysis",
        modules: "Student Data → Analysis → Recommendation Engine → Dashboard → Testing",
        difficulty: "Beginner",
        time: "3–5 Weeks"
    },


    "Environment": {
        sparks: [
            {
                name: "Eco Problem Solver",
                description: "A technology-based solution designed to identify environmental problems and reduce waste and resource usage.",
                technologies: "Python, AI/ML, IoT"
            },
            {
                name: "Smart Waste Monitor",
                description: "A smart system that helps monitor waste levels and supports better waste management.",
                technologies: "IoT, Sensors, Python, AI/ML"
            },
            {
                name: "Eco Awareness Platform",
                description: "A digital platform that encourages sustainable habits through information, challenges and progress tracking.",
                technologies: "HTML, CSS, JavaScript, Python"
            }
        ],
        skills: "Python, AI/ML, IoT, Data Analysis",
        modules: "Problem Analysis → Data Collection → Environmental Analysis → Smart Solution → Dashboard → Testing",
        difficulty: "Intermediate",
        time: "4–6 Weeks"
    },


    "Renewable / Sustainable Energy": {
        sparks: [
            {
                name: "Smart Solar Monitor",
                description: "A monitoring system that tracks solar energy generation and displays useful performance information.",
                technologies: "IoT, Sensors, Python, Data Analysis"
            },
            {
                name: "Energy Usage Predictor",
                description: "An AI-based system that analyzes energy usage patterns and predicts future consumption.",
                technologies: "Python, AI/ML, Data Analysis"
            },
            {
                name: "Smart Energy Saver",
                description: "A smart system that identifies unnecessary energy usage and suggests ways to reduce consumption.",
                technologies: "IoT, AI/ML, Sensors, Python"
            }
        ],
        skills: "Python, IoT, AI/ML, Data Analysis",
        modules: "Energy Data → Monitoring → Prediction → Optimization → Dashboard → Testing",
        difficulty: "Intermediate",
        time: "6–8 Weeks"
    },


    "Transportation": {
        sparks: [
            {
                name: "Smart Transport Assistant",
                description: "A smart system designed to identify transportation problems and provide efficient solutions.",
                technologies: "Python, AI/ML, JavaScript"
            },
            {
                name: "Intelligent Traffic Monitor",
                description: "A computer vision system that analyzes traffic conditions and identifies congestion patterns.",
                technologies: "Python, Computer Vision, AI/ML"
            },
            {
                name: "Smart Parking Finder",
                description: "A digital system that helps users find available parking spaces more efficiently.",
                technologies: "HTML, CSS, JavaScript, Python"
            }
        ],
        skills: "Python, AI/ML, IoT, Data Analysis",
        modules: "Data Collection → Traffic Analysis → Prediction → Solution → Dashboard → Testing",
        difficulty: "Intermediate",
        time: "5–7 Weeks"
    },


    "Mining": {
        sparks: [
            {
                name: "MineSafe AI",
                description: "An intelligent mining safety system that monitors environmental conditions and detects dangerous situations.",
                technologies: "Python, AI/ML, IoT, Gas Sensors, Microcontrollers"
            },
            {
                name: "Smart Miner Safety Jacket",
                description: "A sensor-based safety jacket that monitors environmental conditions and provides alerts during unsafe situations.",
                technologies: "IoT, Sensors, Arduino, GPS, Python"
            },
            {
                name: "Mining Gas Prediction System",
                description: "An AI-based system that analyzes sensor readings and helps identify unusual gas conditions in mining environments.",
                technologies: "Python, AI/ML, IoT, Gas Sensors"
            }
        ],
        skills: "Python, AI/ML, IoT, Sensors, Data Analysis",
        modules: "Sensors → Data Collection → Gas Monitoring → AI Prediction → Alert System → Testing",
        difficulty: "Intermediate–Advanced",
        time: "6–8 Weeks"
    },


    "Water Management": {
        sparks: [
            {
                name: "Smart Water Guardian",
                description: "A smart system that monitors water usage and helps detect unnecessary water wastage.",
                technologies: "IoT, Sensors, Python, AI/ML"
            },
            {
                name: "Water Quality Monitor",
                description: "An IoT-based system that monitors basic water-quality parameters and displays the collected information.",
                technologies: "IoT, Sensors, Arduino, Python"
            },
            {
                name: "AI Water Usage Predictor",
                description: "An AI system that analyzes water consumption patterns and helps predict unusual usage.",
                technologies: "Python, AI/ML, Data Analysis"
            }
        ],
        skills: "Python, IoT, AI/ML, Sensors",
        modules: "Sensors → Water Data → Quality Analysis → Prediction → Alert System → Dashboard",
        difficulty: "Intermediate",
        time: "4–6 Weeks"
    },


    "Space Technology": {
        sparks: [
            {
                name: "Satellite Data Analyzer",
                description: "A system that analyzes satellite data and presents useful information through a simple dashboard.",
                technologies: "Python, AI/ML, Data Analysis"
            },
            {
                name: "Space Object Tracker",
                description: "A software project that visualizes and tracks the movement of space objects using available data.",
                technologies: "Python, JavaScript, Data Visualization"
            },
            {
                name: "Planet Image Analyzer",
                description: "An AI-based project that analyzes planetary or satellite images to identify visual patterns.",
                technologies: "Python, AI/ML, Computer Vision"
            }
        ],
        skills: "Python, AI/ML, Data Science, C++",
        modules: "Data Collection → Signal Processing → AI Analysis → Prediction → Visualization → Testing",
        difficulty: "Advanced",
        time: "8–12 Weeks"
    },


    "Toys & Games": {
        sparks: [
            {
                name: "AI Learning Game",
                description: "An interactive game that combines learning activities with challenges and rewards.",
                technologies: "JavaScript, HTML, CSS, Python"
            },
            {
                name: "Smart Puzzle Game",
                description: "An interactive puzzle game that adapts its difficulty based on player performance.",
                technologies: "JavaScript, AI/ML, HTML, CSS"
            },
            {
                name: "AR Educational Game",
                description: "An augmented reality concept that makes educational activities more interactive.",
                technologies: "Unity, C#, AR/VR"
            }
        ],
        skills: "C#, Unity, Game Design, 3D Modelling",
        modules: "Game Design → Game Logic → Assets → Testing → User Experience → Deployment",
        difficulty: "Beginner–Intermediate",
        time: "3–5 Weeks"
    },


    "Disaster Management": {
        sparks: [
            {
                name: "Smart Disaster Alert System",
                description: "A system designed to monitor warning signals and provide alerts for possible emergency situations.",
                technologies: "IoT, Sensors, Python, AI/ML"
            },
            {
                name: "AI Disaster Risk Analyzer",
                description: "An AI-based system that analyzes available environmental data to identify possible risk patterns.",
                technologies: "Python, AI/ML, Data Analysis"
            },
            {
                name: "Emergency Resource Tracker",
                description: "A digital platform that helps organize and track emergency resources during disaster response.",
                technologies: "HTML, CSS, JavaScript, Python"
            }
        ],
        skills: "Python, AI/ML, IoT, Data Analysis",
        modules: "Data Collection → Risk Analysis → Prediction → Alert System → Resource Management",
        difficulty: "Intermediate",
        time: "5–7 Weeks"
    },


    "Blockchain & Cybersecurity": {
        sparks: [
            {
                name: "Secure Document System",
                description: "A system designed to improve the secure storage and verification of digital documents.",
                technologies: "Python, Blockchain, JavaScript"
            },
            {
                name: "Cyber Safety Assistant",
                description: "An educational platform that helps users understand common cybersecurity risks and safe practices.",
                technologies: "Python, JavaScript, Cybersecurity"
            },
            {
                name: "Blockchain Certificate Verifier",
                description: "A concept for verifying digital certificates using blockchain-based records.",
                technologies: "Blockchain, JavaScript, Python"
            }
        ],
        skills: "Python, Blockchain, Cybersecurity, JavaScript",
        modules: "Requirement Analysis → Security Design → Implementation → Verification → Testing",
        difficulty: "Advanced",
        time: "8–10 Weeks"
    },


    "Tourism": {
        sparks: [
            {
                name: "Smart Travel Assistant",
                description: "A digital assistant that helps users plan trips based on destinations, interests and available time.",
                technologies: "Python, AI/ML, JavaScript"
            },
            {
                name: "AI Destination Recommender",
                description: "An AI-based system that recommends destinations according to user preferences.",
                technologies: "Python, AI/ML, Data Analysis"
            },
            {
                name: "Virtual Heritage Explorer",
                description: "An interactive platform that helps users explore cultural and historical places digitally.",
                technologies: "HTML, CSS, JavaScript, AR/VR"
            }
        ],
        skills: "Python, Web Development, AI/ML, Data Analysis",
        modules: "Data Collection → Recommendation Engine → User Interface → Testing → Deployment",
        difficulty: "Beginner–Intermediate",
        time: "3–5 Weeks"
    },


    "Clean & Green Technology": {
        sparks: [
            {
                name: "Green Waste Monitor",
                description: "A smart solution that helps monitor waste generation and improve waste management.",
                technologies: "IoT, Sensors, Python, AI/ML"
            },
            {
                name: "Eco Energy Tracker",
                description: "A platform that tracks energy usage and encourages more sustainable consumption.",
                technologies: "Python, IoT, Data Analysis"
            },
            {
                name: "Smart Recycling Assistant",
                description: "An AI-based system that helps classify recyclable and non-recyclable materials.",
                technologies: "Python, AI/ML, Computer Vision"
            }
        ],
        skills: "Python, IoT, AI/ML, Sensors",
        modules: "Problem Analysis → Data Collection → Smart Solution → Monitoring → Testing",
        difficulty: "Intermediate",
        time: "4–6 Weeks"
    },


    "Robotics & Drones": {
        sparks: [
            {
                name: "Smart Rescue Robot",
                description: "A robotic system concept designed to assist in environments that may be difficult for humans to access.",
                technologies: "Robotics, Arduino, Sensors, Python"
            },
            {
                name: "AI Object Detection Drone",
                description: "A drone-based concept that uses computer vision to identify objects in captured images.",
                technologies: "Python, AI/ML, Computer Vision"
            },
            {
                name: "Autonomous Monitoring Robot",
                description: "A robot concept designed to monitor an area and collect environmental information.",
                technologies: "Robotics, IoT, Sensors, Python"
            }
        ],
        skills: "Python, C++, Robotics, Arduino, AI/ML",
        modules: "Hardware Setup → Sensor Integration → Control System → AI Model → Testing → Deployment",
        difficulty: "Advanced",
        time: "8–10 Weeks"
    },


    "Heritage & Culture": {
        sparks: [
            {
                name: "Digital Heritage Explorer",
                description: "An interactive platform that helps users explore historical places and cultural information.",
                technologies: "HTML, CSS, JavaScript, Python"
            },
            {
                name: "AI Culture Guide",
                description: "An AI-based assistant that provides information about cultural traditions and heritage.",
                technologies: "Python, NLP, AI/ML"
            },
            {
                name: "Virtual Museum",
                description: "A digital museum experience that allows users to explore cultural objects and historical information.",
                technologies: "HTML, CSS, JavaScript, AR/VR"
            }
        ],
        skills: "Web Development, UI/UX, AI/ML, Digital Design",
        modules: "Data Collection → Digitalization → AI/Design → Interactive Platform → Testing",
        difficulty: "Beginner–Intermediate",
        time: "3–5 Weeks"
    },


    "Fitness & Sports": {
        sparks: [
            {
                name: "Smart Sports Tracker",
                description: "A digital system that tracks sports activities and displays performance information.",
                technologies: "Python, Data Analysis, JavaScript"
            },
            {
                name: "AI Performance Analyzer",
                description: "An AI-based system that analyzes activity data and identifies performance patterns.",
                technologies: "Python, AI/ML, Data Analysis"
            },
            {
                name: "Smart Training Planner",
                description: "A platform that organizes training activities based on goals and available time.",
                technologies: "Python, JavaScript, AI/ML"
            }
        ],
        skills: "Python, AI/ML, Data Analysis, IoT",
        modules: "Data Collection → Performance Analysis → Prediction → Recommendations → Dashboard",
        difficulty: "Intermediate",
        time: "4–6 Weeks"
    },


    "Food & Nutrition": {
        sparks: [
            {
                name: "Smart Food Planner",
                description: "A digital platform that helps users organize food choices based on general preferences.",
                technologies: "Python, AI/ML, JavaScript"
            },
            {
                name: "Food Waste Monitor",
                description: "A smart system designed to monitor food wastage and identify opportunities for reducing waste.",
                technologies: "IoT, Python, AI/ML"
            },
            {
                name: "AI Food Recognition System",
                description: "A computer vision project that identifies food items from images for educational and tracking purposes.",
                technologies: "Python, AI/ML, Computer Vision"
            }
        ],
        skills: "Python, AI/ML, Data Analysis, IoT",
        modules: "Data Collection → Food Analysis → Recommendation System → Dashboard → Testing",
        difficulty: "Beginner–Intermediate",
        time: "4–6 Weeks"
    },


    "Dairy & Livestock": {
        sparks: [
            {
                name: "Smart Dairy Monitor",
                description: "An IoT-based system that helps monitor environmental conditions in dairy environments.",
                technologies: "IoT, Sensors, Python"
            },
            {
                name: "Livestock Monitoring System",
                description: "A smart monitoring concept that collects sensor information and helps identify unusual conditions.",
                technologies: "IoT, Sensors, AI/ML"
            },
            {
                name: "AI Farm Management Assistant",
                description: "A digital assistant that organizes farm information and provides data-based insights.",
                technologies: "Python, AI/ML, Data Analysis"
            }
        ],
        skills: "Python, IoT, AI/ML, Sensors",
        modules: "Sensors → Animal Data → Monitoring → Analysis → Alerts → Dashboard",
        difficulty: "Intermediate",
        time: "5–7 Weeks"
    },


    "Aquaculture": {
        sparks: [
            {
                name: "Smart Fish Farm Monitor",
                description: "An IoT system that monitors environmental conditions in fish farming environments.",
                technologies: "IoT, Sensors, Arduino, Python"
            },
            {
                name: "Water Quality Predictor",
                description: "An AI-based system that analyzes water-quality data and identifies unusual patterns.",
                technologies: "Python, AI/ML, IoT, Data Analysis"
            },
            {
                name: "Smart Aquaculture Assistant",
                description: "A digital platform that helps organize aquaculture information and monitor important conditions.",
                technologies: "Python, IoT, AI/ML"
            }
        ],
        skills: "Python, IoT, AI/ML, Sensors",
        modules: "Water Sensors → Data Collection → Quality Analysis → Prediction → Alerts → Testing",
        difficulty: "Intermediate",
        time: "5–7 Weeks"
    },


    "Business": {
        sparks: [
            {
                name: "AI Business Assistant",
                description: "A digital assistant that helps organize business information and identify useful patterns.",
                technologies: "Python, AI/ML, Data Analysis"
            },
            {
                name: "Customer Feedback Analyzer",
                description: "An AI system that analyzes customer feedback and identifies common topics and sentiments.",
                technologies: "Python, NLP, AI/ML"
            },
            {
                name: "Smart Business Dashboard",
                description: "A dashboard that presents important business information in an easy-to-understand format.",
                technologies: "Python, JavaScript, Data Analysis"
            }
        ],
        skills: "Python, Data Analysis, Web Development, AI/ML",
        modules: "Problem Analysis → Data Collection → Analysis → Recommendation → Dashboard → Testing",
        difficulty: "Beginner–Intermediate",
        time: "3–5 Weeks"
    },


    "Finance": {
        sparks: [
            {
                name: "Personal Finance Assistant",
                description: "A digital tool that helps users organize expenses and understand spending patterns.",
                technologies: "Python, Data Analysis, JavaScript"
            },
            {
                name: "Expense Pattern Analyzer",
                description: "A data analysis project that identifies patterns in spending records.",
                technologies: "Python, Data Analysis, AI/ML"
            },
            {
                name: "Smart Budget Planner",
                description: "A simple platform that helps users organize budgets and track expenses.",
                technologies: "HTML, CSS, JavaScript, Python"
            }
        ],
        skills: "Python, Data Analysis, AI/ML, SQL",
        modules: "Financial Data → Data Analysis → Pattern Detection → Recommendations → Dashboard",
        difficulty: "Intermediate–Advanced",
        time: "5–7 Weeks"
    },


    "Social & Community": {
        sparks: [
            {
                name: "Community Problem Solver",
                description: "A platform where people can report local problems and explore possible technology-based solutions.",
                technologies: "HTML, CSS, JavaScript, Python"
            },
            {
                name: "Smart Volunteer Platform",
                description: "A digital platform that connects community needs with people interested in helping.",
                technologies: "Python, JavaScript, Database"
            },
            {
                name: "Local Issue Analyzer",
                description: "An AI-based system that analyzes reported community problems and groups them by category.",
                technologies: "Python, AI/ML, NLP"
            }
        ],
        skills: "Python, Web Development, AI/ML, Data Analysis",
        modules: "Problem Analysis → Data Collection → Solution Design → Platform → Testing → Deployment",
        difficulty: "Beginner–Intermediate",
        time: "3–5 Weeks"
    },


    "Science & Research": {
        sparks: [
            {
                name: "Research Data Analyzer",
                description: "A platform that helps organize and analyze research datasets.",
                technologies: "Python, Data Analysis, AI/ML"
            },
            {
                name: "AI Research Assistant",
                description: "A digital assistant that helps organize research information and identify useful patterns.",
                technologies: "Python, AI/ML, NLP"
            },
            {
                name: "Scientific Data Dashboard",
                description: "An interactive dashboard for visualizing scientific data and observations.",
                technologies: "Python, JavaScript, Data Visualization"
            }
        ],
        skills: "Python, AI/ML, Data Science, Data Analysis",
        modules: "Data Collection → Data Processing → Analysis → AI Model → Results → Visualization",
        difficulty: "Advanced",
        time: "8–12 Weeks"
    },


    "Other": {
        sparks: [
            {
                name: "Smart Problem Solver",
                description: "An innovative project designed to analyze a real-world problem and provide a technology-based solution.",
                technologies: "Python, AI/ML, HTML, CSS, JavaScript"
            },
            {
                name: "AI Solution Assistant",
                description: "An AI-based platform that analyzes a problem and suggests possible technology-based approaches.",
                technologies: "Python, AI/ML, NLP"
            },
            {
                name: "Community Innovation Platform",
                description: "A platform where users can share real-world problems and explore innovative project solutions.",
                technologies: "HTML, CSS, JavaScript, Python"
            }
        ],
        skills: "Python, AI/ML, Data Analysis, Problem Solving",
        modules: "Problem Analysis → Data Collection → Processing → Solution Development → Testing",
        difficulty: "Intermediate",
        time: "4–6 Weeks"
    }

};


// ------------------------------------------------------
// GENERATE SPARK
// ------------------------------------------------------
function generateSpark() {

    // Get user inputs
    const problemElement = document.getElementById("problem");
    const domainElement = document.getElementById("domain");
    const teamElement = document.getElementById("team");

    // Safety check
    if (!problemElement || !domainElement || !teamElement) {
        alert("Spark Generator could not load correctly.");
        return;
    }

    const problem = problemElement.value.trim();
    const domain = domainElement.value;
    const team = teamElement.value;


    // Check required fields
    if (problem === "" || domain === "" || team === "") {
        alert("Please fill in the problem, domain and team size.");
        return;
    }


    // Get selected skills
    const selectedSkills = [];

    const skillInputs = document.querySelectorAll(
        '.skill-option input[type="checkbox"]:checked'
    );

    skillInputs.forEach(function (input) {
        selectedSkills.push(input.value);
    });


    // Get data for selected domain
    const data = sparkData[domain] || sparkData["Other"];


    // --------------------------------------------------
    // SPARK 01
    // --------------------------------------------------
    document.getElementById("projectName").textContent =
        data.sparks[0].name;

    document.getElementById("projectDescription").textContent =
        data.sparks[0].description;

    document.getElementById("technologies").textContent =
        data.sparks[0].technologies;

    // --------------------------------------------------
    // SPARK 02
    // --------------------------------------------------
    document.getElementById("projectName2").textContent =
        data.sparks[1].name;

    document.getElementById("projectDescription2").textContent =
        data.sparks[1].description;

    document.getElementById("technologies2").textContent =
        data.sparks[1].technologies;


    // --------------------------------------------------
    // SPARK 03
    // --------------------------------------------------
    document.getElementById("projectName3").textContent =
        data.sparks[2].name;

    document.getElementById("projectDescription3").textContent =
        data.sparks[2].description;

    document.getElementById("technologies3").textContent =
        data.sparks[2].technologies;


    // --------------------------------------------------
    // SKILLS TO LEARN
    // --------------------------------------------------
    let skillsText = data.skills;

    if (selectedSkills.length > 0) {
        skillsText =
            "You already know: " +
            selectedSkills.join(", ") +
            ". Recommended areas to learn: " +
            data.skills +
            ".";
    }

    document.getElementById("skillsToLearn").textContent =
        skillsText;


    // --------------------------------------------------
    // PROJECT MODULES
    // --------------------------------------------------
    document.getElementById("projectModules").textContent =
        data.modules;


    // --------------------------------------------------
    // DIFFICULTY
    // --------------------------------------------------
    document.getElementById("difficulty").textContent =
        data.difficulty;


    // --------------------------------------------------
    // ESTIMATED TIME
    // --------------------------------------------------
    document.getElementById("estimatedTime").textContent =
        data.time;


    // --------------------------------------------------
    // ROADMAP
    // --------------------------------------------------
    document.getElementById("roadmap").textContent =
        "1. Understand the problem → " +
        "2. Research existing solutions → " +
        "3. Plan the project → " +
        "4. Select technologies → " +
        "5. Build the first version → " +
        "6. Test and improve → " +
        "7. Showcase your project.";


    // --------------------------------------------------
    // SHOW RESULT
    // --------------------------------------------------
    const result = document.getElementById("result");

    result.style.display = "block";


    // --------------------------------------------------
    // SCROLL TO RESULT
    // --------------------------------------------------
    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}