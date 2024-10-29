import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = ({ buttonName, onButtonClick }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logoContainer">
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
        </div>
        <button className="headerButton" onClick={onButtonClick}>
          {buttonName}
        </button>
      </div>
    </header>
  );
};

export default Header;
