import React from 'react';
import SkillNode from './SkillNode';
import benchPress from "../assets/benchPress.png";
import squat from "../assets/squat.png";
import deadlift from "../assets/deadlift.png";
import "./styles/StrengthExercises.css";

function StrengthExercises({ currentSkill, onSkillChange }) {
  function handleBenchClick() {
    onSkillChange(0);
  }
  function handleSquatsClick() {
    onSkillChange(1);
  }
  function handleDeadliftClick() {
    onSkillChange(2);
  }

  if (currentSkill === 0) {
    return (
      <div className="strength-exercises-container">
        <div className="skills-title">SKILLS</div>
        <SkillNode img={benchPress} title="Bench Press" current onChange={handleBenchClick} />
        <div className="node-connector"></div>
        <SkillNode img={squat} title="Squats" onChange={handleSquatsClick} />
        <div className="node-connector"></div>
        <SkillNode img={deadlift} title="Deadlift" onChange={handleDeadliftClick} />
      </div>
    )
  }
  if (currentSkill === 1) {
    return (
      <div className="strength-exercises-container">
        <div className="skills-title">SKILLS</div>
        <SkillNode img={benchPress} title="Bench Press" onChange={handleBenchClick} />
        <div className="node-connector"></div>
        <SkillNode img={squat} title="Squats" current onChange={handleSquatsClick} />
        <div className="node-connector"></div>
        <SkillNode img={deadlift} title="Deadlift" onChange={handleDeadliftClick} />
      </div>
    )
  }
  if (currentSkill === 2) {
    return (
      <div className="strength-exercises-container">
        <div className="skills-title">SKILLS</div>
        <SkillNode img={benchPress} title="Bench Press" onChange={handleBenchClick} />
        <div className="node-connector"></div>
        <SkillNode img={squat} title="Squats" onChange={handleSquatsClick} />
        <div className="node-connector"></div>
        <SkillNode img={deadlift} title="Deadlift" current onChange={handleDeadliftClick} />
      </div>
    )
  }
  else {
    return (
      <div className="strength-exercises-container">
        <div className="skills-title">SKILLS</div>
        <SkillNode img={benchPress} title="Bench Press" onChange={handleBenchClick} />
        <div className="node-connector"></div>
        <SkillNode img={squat} title="Squats" onChange={handleSquatsClick} />
        <div className="node-connector"></div>
        <SkillNode img={deadlift} title="Deadlift" onChange={handleDeadliftClick} />
      </div>
    )
  }
}

export default StrengthExercises