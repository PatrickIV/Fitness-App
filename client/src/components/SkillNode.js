import React, { useEffect } from 'react';
import "./styles/SkillNode.css";

function SkillNode({ img, title, current, onClick }) {
  useEffect(() => {
    if (current) {
      handleHover();
    } else {
      handleOffHover();
    }
  })

  function handleHover(e) {
    document.getElementById(title + "-highlight").style.background = "linear-gradient(90deg, rgba(223,205,0,0.5051062661392682) 0%, rgba(0,212,255,0) 100%)";
  }
  function handleOffHover(e) {
    document.getElementById(title + "-highlight").style.background = "transparent";
  }

  return (
    <div className="skillnode-container" onMouseOver={handleHover} onMouseOut={handleOffHover} onClick={onClick}>
      <div className="skill-picture-container">
        <img src={img} alt={title + " skill"} className="skill-picture" />
        <div className="skill-highlight" id={title + "-highlight"}></div>
        <div className="skill-circle-cover"></div>
      </div>
      <div className="skill-title">{title}</div>
    </div>
  )
}

export default SkillNode