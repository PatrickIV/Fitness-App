import React from 'react';
import logo from "../assets/FitQuestLogo.png";
import "./styles/WelcomePage.css";

export default function WelcomePage() {

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="FitQuest logo" />
      </div>

      <div className="welcomeOption">
        {/* direct to login UI */}
        <button className="welcome-btn" id='login'>Login</button> 
        {/* direct to signup UI */}
        <button className="welcome-btn" id='signup'>Signup</button>
      </div>
    </div>
  )
}