import React, { useState, useEffect } from 'react';
// import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = ({ buttonName, onButtonClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleLogoClick = (event) => {
    if (location.pathname === '/list') {
      event.preventDefault();
      setRefreshTrigger(true);
    }
  };

  useEffect(() => {
    if (refreshTrigger) {
      navigate('/temp', { replace: true }); // 임시 경로로 이동
      setTimeout(() => {
        navigate('/list', { replace: true }); // 원래 경로로 다시 이동
      }, 0);
      setRefreshTrigger(false);
    }
  }, [refreshTrigger, navigate]);

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
