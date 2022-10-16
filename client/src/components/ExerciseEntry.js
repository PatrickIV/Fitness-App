import React from 'react';
import "./styles/ExerciseEntry.css";

function ExerciseEntry() {
  return (
    <div className="exercise-entry-container">
      <div className="skill-entry-title">Bench Press</div>
      <div className="skill-entry-info">A compound exercise, targetting the muscles of the upper body.</div>
      <label htmlFor="weight" className='skill-label'>Enter a new log:</label>
      <input type="number" id="weight" />
    </div>
  )
}

export default ExerciseEntry