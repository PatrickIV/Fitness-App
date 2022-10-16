import React, { useEffect, useState } from 'react';
import StrengthStats from "../components/StrengthStats";
import StrengthExercises from "../components/StrengthExercises";
import ExerciseEntry from "../components/ExerciseEntry";
import Navbar from '../components/Navbar';

function StrengthPath() {
  let score = 27;   // test

  const [skill, setSkill] = useState(null);

  useEffect(() => {
    // Call api to get strength data
  }, []);

  function handleSkillChange(num) {
    setSkill(num);
  }

  return (
    <>
      <Navbar />
      <div className="strength-path-container" style={{ display: "flex", justifyContent: "space-between", paddingTop: "60px" }}>
        <StrengthStats score={score} />
        <StrengthExercises currentSkill={skill} onSkillChange={handleSkillChange} />
        <ExerciseEntry skill={skill} />
      </div>
    </>
  );
}

export default StrengthPath