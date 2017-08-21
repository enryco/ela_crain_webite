import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/writing/Header.css';

const Header = ({ showLayoutIcons, onViewModeChange }) => {
  return (
    <header>
      <div className="section-selector">
        <div className="writing-section section">
          <Link to="/writing/posts">Writing</Link>
        </div>
        <div className="coaching-section section">
          <Link to="/coaching">Coaching</Link>
        </div>
      </div>
      <div className="header-wrapper">
        <div className="icons-wrapper">
          {showLayoutIcons &&
            <div className="icons left reading-styles">
              <span
                className="icon single"
                onClick={() => onViewModeChange('single')}
              >
                Single
              </span>
              <span
                className="icon overview"
                onClick={() => onViewModeChange('overview')}
              >
                Overview
              </span>
            </div>}
        </div>
        <div className="logo">
          <Link to="/">Ela Crain</Link>
        </div>
        <div className="links">
          <Link to="/writing/posts">Posts</Link>
          <Link to="/writing/about">About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
