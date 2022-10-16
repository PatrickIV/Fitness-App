import React from 'react';
import "./styles/SkillSelect.css";

function SkillSelect({ picture, title, titleColor, size = 175, margin = 0 }) {
  return (
    <div className="skill-select-container">
      <div className="skill-img-container">
        <img src={picture} alt={title + " skill"} className="skill-img"
          style={{ width: size + "px", height: size + "px", marginBottom: margin + "px" }} />
      </div>
      <div className="skill-title" style={{ color: titleColor }}>{title}</div>
    </div>
  )
}

export default SkillSelect