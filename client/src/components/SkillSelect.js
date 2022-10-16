import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/SkillSelect.css";

function SkillSelect({ picture, title, titleColor, size = 175, margin = 0, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div className="skill-select-container">
        <div className="skill-img-container">
          <img src={picture} alt={title + " skill"} className="skill-img"
            style={{ width: size + "px", height: size + "px", marginBottom: margin + "px" }} />
        </div>
        <div className="skill-select-title" style={{ color: titleColor }}>{title}</div>
      </div>
    </Link>
  )
}

export default SkillSelect