import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Add BrowserRouter and basename
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}> {/* Important for GitHub Pages */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
