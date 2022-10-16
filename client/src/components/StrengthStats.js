import React from 'react';
import ProgressBar from "./ProgressBar";
import ProgressGraph from "./ProgressGraph";
import "./styles/StrengthStats.css";

function StrengthStats({ score }) {
  return (
    <div className="strength-stats-container">
      <div className="strength-title">STRENGTH</div>
      <div className="strength-score">{score}</div>
      <ProgressBar score={score} />
      <ProgressGraph />
    </div>
  )
}

export default StrengthStats