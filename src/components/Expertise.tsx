import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare} from '@fortawesome/free-brands-svg-icons';
import {faDatabase, faTools, faCloud } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "Bootstrap",
    "jQuery",    
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "Material-UI",
    "Chart.js",
    "Sass", 
    "AJAX",
    "DOM APIs",
    "User Authentication",
    "OAuth",
    "JSON",
    "Chrome Lighthouse",
    "WAVE"
];

const labelsSecond = [
    "Node.js",
    "C#",
    "ASP.NET Core",
    "ASP.NET",
    "Web API", 
    "Express.js",    
    "Oracle DB2",
    "MySQL",
    "MS SQL Server",
    "Microsoft Azure",
    "SQL Server Integration Services",    
    "Entity Framework",
    "XUnit"
];

const labelsThird = [
    "GIT",
    "Postman",
    "Heroku",
    "SOAP UI",
    "JIRA",
    "Microsoft Azure",
    "Pivotal Cloud Foundry (PCF)",
    "Octopus",
    "TeamCity",    
    "Fiddler",
    "Swagger",
    "Selenium",
    "SVN",
    "Version One",
    "Team Foundation Server (TFS)"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div className="skill-icon">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <FontAwesomeIcon icon={faJsSquare} size="3x"/>
                    </div>
                    <h3>Front-End Development</h3>
                    <p>Expertise in creating responsive and dynamic user interfaces using modern web technologies like React, Bootstrap, and Sass. Skilled in crafting accessible and performance-optimized websites, ensuring cross-browser compatibility and seamless user experiences. Familiar with OAuth and other user authentication techniques for secure web applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <div className="skill-icon">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    </div>
                    <h3>Back-End Development</h3>
                    <p>Proficient in developing scalable and secure server-side applications using .NET and Node.js frameworks. Strong understanding of database management and SQL, with experience in integrating APIs and handling complex data operations. Adept at cloud-based deployments and managing server infrastructure through Microsoft Azure and related technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <div className="skill-icon">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <FontAwesomeIcon icon={faTools} size="3x"/>
                    </div>
                    <h3>DevOps & Automation</h3>
                    <p>Hands-on experience with continuous integration and deployment (CI/CD) pipelines using tools like Octopus, TeamCity, and TFS. Skilled in version control with GIT and SVN, and capable of streamlining development workflows. Proficient in cloud platforms like Heroku and Pivotal Cloud Foundry, and experienced in automated testing with Selenium for reliable application quality assurance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;