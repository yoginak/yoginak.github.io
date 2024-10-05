import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  //Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import Education from "./components/Education";
// import Resume from "./components/Resume";

function App() {
    const [mode, setMode] = useState<string>('dark');
    const educationDetails = [
        {
          institution: 'BrainStation, Toronto',
          degree: 'Diploma in Software Engineering',
          duration: 'Jul 2024-Sep 2024',
        },
        {
          institution: 'Acropolis Institute of Tech and Research',
          degree: 'Bachelor of Engineering (Information Technology)',
          duration: '2009 - 2013',
        },
      ];

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main mode={mode}/>
            <Expertise/>            
            <Education educationDetails={educationDetails} />
            <Timeline/>
            <Project/>
            {/* <Contact/> */}
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;