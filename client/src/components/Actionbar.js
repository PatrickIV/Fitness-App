import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./styles/Actionbar.css";

function Actionbar({ currentTab, onTabClick }) {
  let link = "/me";
  if (currentTab === 2) {
    link = "/choose";
  }

  useEffect(() => {
    // Light up current tab
    document.getElementById(currentTab).style.backgroundColor = "rgba(220, 211, 36, 0.2)";

    if (currentTab === 2) {
      document.getElementById(2).innerHTML = "START!";
      document.getElementById(currentTab).style.boxShadow = "#ffdd00a8 0px -5px 30px";
    } else {
      document.getElementById(2).innerHTML = "PROFILE";
    }

    return () => {
      console.log("Clearing " + currentTab);
      try {
        document.getElementById(currentTab).style.backgroundColor = "rgba(54, 54, 54, 0.5)";
        if (currentTab === 2) {
          document.getElementById(currentTab).style.boxShadow = "#ffdd00a8 0px -5px 10px";
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  }, [currentTab]);

  return (
    <div className='actionbar-container'>
      <div className="actionbar-left">
        <div className="actionbar-section">
          <button className="actionbar-btn" id="0" onClick={onTabClick}>MY REGIMENT</button>
        </div>

        <div className="actionbar-section">
          <button className="actionbar-btn" id="1" onClick={onTabClick}>INVENTORY</button>
        </div>
      </div>

      <div className="actionbar-middle">
        <div className="actionbar-section start-section">
          <Link to={link}>
            <button className="actionbar-btn start-btn" id="2" onClick={onTabClick}>
              START
            </button>
          </Link>
        </div>
      </div>

      <div className="actionbar-right">
        <div className="actionbar-section">
          <button className="actionbar-btn" id="3" onClick={onTabClick}>LEADERBOARD</button>
        </div>
        <div className="actionbar-section">
          <button className="actionbar-btn" id="4" onClick={onTabClick}>SETTINGS</button>
        </div>
      </div>
    </div>
  )
}

export default Actionbar