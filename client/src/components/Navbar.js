import React from 'react';
import "./styles/Navbar.css";
import logo from "../assets/FitQuestLogo.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <button className="logo-btn">
        <img src={logo} alt="FitQuest logo" className="fitquest-logo" />
      </button>
      <div className="right-buttons">
        <button className="navbar-btn">ABOUT</button>
        <button className="navbar-btn">MY PROFILE</button>
      </div>
    </div>
  )
}

export default Navbar