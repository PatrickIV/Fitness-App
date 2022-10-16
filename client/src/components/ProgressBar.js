import React, { useEffect } from 'react';
import "./styles/ProgressBar.css";

function ProgressBar({ score }) {
  let currentLevel = Math.floor(score / 10) + 1;

  useEffect(() => {
    document.getElementById("progress").style.width = (score % 10) * 10 + "%";
  }, [score])

  return (
    <div className="progress-bar-container">
      <div className="level">LV. {currentLevel}</div>
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <div className="level">LV. {currentLevel + 1}</div>
    </div>
  )
}

export default ProgressBar