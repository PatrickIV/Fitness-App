import React from 'react';
import graph from "../assets/graph.png";

function ProgressGraph() {
  return (
    <div className="progress-graph-container" style={{ marginTop: "30px" }}>
      <img src={graph} alt="Graph" style={{ width: "300px" }} />
    </div>
  )
}

export default ProgressGraph