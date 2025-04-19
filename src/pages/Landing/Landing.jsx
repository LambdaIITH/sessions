import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 'git',
      title: 'Git and GitHub',
      description: 'Learn version control fundamentals and collaboration with Git and GitHub',
      path: '/git',
      imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
    }
    // More slides can be added here in the future
  ];

  const handleSlideClick = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>ProFicient Sessions</h1>
        <p>Interactive learning slides for developers</p>
      </header>

      <div className="slides-list-container">
        <h2>Available Presentations</h2>
        <ul className="slides-list">
          {slides.map(slide => (
            <li 
              key={slide.id} 
              className="slide-item"
              onClick={() => handleSlideClick(slide.path)}
            >
              <div className="slide-icon">
                <img src={slide.imageUrl} alt={slide.title} />
              </div>
              <div className="slide-info">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Landing;