import React, { useEffect, useState } from 'react';
import StrengthStats from "../components/StrengthStats";
import StrengthExercises from "../components/StrengthExercises";
import ExerciseEntry from "../components/ExerciseEntry";

function StrengthPath() {
  let score = 22;   // test

  const [skill, setSkill] = useState(null);

  useEffect(() => {
    // Call api to get strength data
  }, []);

  function handleSkillChange(num) {
    setSkill(num);
  }

  return (
    <div className="strength-path-container" style={{ display: "flex", justifyContent: "space-between" }}>
      <StrengthStats score={score} />
      <StrengthExercises currentSkill={skill} onSkillChange={handleSkillChange} />
      <ExerciseEntry skill={skill} />
    </div>
  );
}

export default StrengthPath