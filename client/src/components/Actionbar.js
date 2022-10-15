import React from 'react';
import "./styles/Actionbar.css";

function Actionbar() {
  return (
    <div className="actionbar-container">
      <div className="actionbar-section">
        <button className="actionbar-btn">MY REGIMENT</button>
      </div>

      <div className="actionbar-section">
        <button className="actionbar-btn">INVENTORY</button>
      </div>

      <div className="actionbar-section start-section">
        <button className="actionbar-btn start-btn">START</button>
      </div>

      <div className="actionbar-section">
        <button className="actionbar-btn">LEADERBOARD</button>
      </div>

      <div className="actionbar-section">
        <button className="actionbar-btn">SETTINGS</button>
      </div>
    </div>
  )
}

export default Actionbar