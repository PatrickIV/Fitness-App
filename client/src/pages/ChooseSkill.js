import React from 'react';
import SkillSelect from '../components/SkillSelect';
import strengthIcon from "../assets/medievalHelmet.png";
import enduranceIcon from "../assets/woodenShield.png";
import agilityIcon from "../assets/leatherBoots.png";
import Navbar from "../components/Navbar";
import "./styles/ChooseSkill.css";

function ChooseSkill() {
  return (
    <div className="choose-skill-container" >
      <Navbar />

      <div className="choose-skill-title">
        CHOOSE A PATH:
      </div>

      <div className="skill-container">
        <SkillSelect picture={strengthIcon} title="STRENGTH"
          titleColor="rgba(243, 53, 53, 1)" link="/strength" />
        <SkillSelect picture={enduranceIcon} title="ENDURANCE" titleColor="rgba(212, 132, 12, 1)"
          size={130} margin={40} link="/404" />
        <SkillSelect picture={agilityIcon} title="AGILITY" titleColor="rgba(12, 139, 212, 1)"
          margin={-10} link="/404" />
      </div>
    </div>
  )
}

export default ChooseSkill