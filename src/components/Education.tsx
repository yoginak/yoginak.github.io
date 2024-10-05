import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
// import '../assets/styles/Education.scss';

interface EducationProps {
  educationDetails: {
    institution: string;
    degree: string;
    duration: string;
  }[];
}

const Education: React.FC<EducationProps> = ({ educationDetails }) => {
  return (
    <div id="education">
    <Box className="education-container">
        <div>
      <Typography variant="h3" gutterBottom className="education-title">
        <SchoolIcon fontSize="large" /> Education
      </Typography>
      </div>
      {educationDetails.map((edu, index) => (
        <Box key={index} className="education-item">
            <div className="education-box">
          <Typography variant="h5" className="education-degree">
            {edu.degree}
          </Typography>          
          <Typography variant="h5" className="education-institution">
            {edu.institution}
          </Typography>          
          <Typography variant="body1" className="education-duration">
            {edu.duration}
          </Typography>
          </div>
        </Box>
      ))}
    </Box>
    </div>
  );
};

export default Education;
