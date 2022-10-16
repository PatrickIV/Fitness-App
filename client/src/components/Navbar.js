import React from 'react';
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../assets/FitQuestLogo.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <button className="logo-btn">
          <img src={logo} alt="FitQuest logo" className="fitquest-logo" />
        </button>
      </Link>
      <div className="right-buttons">
        <Link to="/about">
          <button className="navbar-btn">ABOUT</button>
        </Link>
        <Link to="/me">
          <button className="navbar-btn">MY PROFILE</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar