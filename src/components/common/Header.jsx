import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = ({ buttonName, onButtonClick }) => {
  const location = useLocation();

  const handleLogoClick = (event) => {
    if (location.pathname === '/list') {
      event.preventDefault();
      window.location.reload();
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logoContainer">
            <Link to="/list" onClick={handleLogoClick}>
              <img src={logo} className="logo" alt="Logo" />
            </Link>
          </div>
          <button className="headerButton" onClick={onButtonClick}>
            {buttonName}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
