import React from 'react';
import logo from "../assets/FitQuestLogo.png";

export default function WelcomePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={logo} alt="FitQuest logo" />
    </div>
  )
}