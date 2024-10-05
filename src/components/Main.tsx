import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/Yogina-Khandelwal.png';

interface MainProps {
  mode: string; 
}

const Main: React.FC<MainProps> = ({ mode }) => {
  const pdfUrl = `${process.env.PUBLIC_URL}/Yogina_khandelwal_SoftwareDeveloper.pdf`;

  const handleOpenPdf = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Yogina Khandelwal" />
        </div>
        <div className="content">
          <div className="social_icons">
            <Button
              variant="outlined"
              sx={{
                backgroundColor: 'transparent',
                color: mode === 'dark' ? 'white' : 'black',
                border: mode === 'dark' ? '1px solid white' : '1px solid black',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  border: mode === 'dark' ? '1px solid white' : '1px solid black',
                  outline: 'none', 
                },
                '&:focus': {
                  outline: 'none', 
                },
              }}
              onClick={handleOpenPdf}
            >
              Resume
            </Button>
            <a href="https://github.com/yoginak" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/yogina/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Yogina Khandelwal</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <Button
              variant="outlined"
              sx={{
                backgroundColor: 'transparent',
                color: mode === 'dark' ? 'white' : 'black',
                border: mode === 'dark' ? '1px solid white' : '1px solid black',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  border: mode === 'dark' ? '1px solid white' : '1px solid black',
                  outline: 'none', 
                },
                '&:focus': {
                  outline: 'none', 
                },
              }}
              onClick={handleOpenPdf}
            >
              Resume
            </Button>
            <a href="https://github.com/yoginak" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/yogina/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
