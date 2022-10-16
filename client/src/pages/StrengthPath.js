import React from 'react';
import StrengthStats from "../components/StrengthStats";
import StrengthExercises from "../components/StrengthExercises";
import ExerciseEntry from "../components/ExerciseEntry";

function StrengthPath() {
  return (
    <div className="strength-path-container" style={{ display: "flex" }}>
      <StrengthStats />
      <StrengthExercises />
      <ExerciseEntry />
    </div>
  );
}

export default StrengthPath