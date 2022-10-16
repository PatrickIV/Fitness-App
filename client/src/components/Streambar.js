import React, { useEffect } from 'react'
import './styles/Streambar.css'

export default function Streambar({ currentTab, onTabClick }) {
  useEffect(() => {
    try {
      document.getElementById(currentTab).style.backgroundColor="rgba(220, 211, 36, 0.2)";
  
      return () => {
        document.getElementById(currentTab).style.backgroundColor="rgba(54, 54, 54, 0.5)";
      }
    }
    catch(e) {
      console.log(e);
    }
  });

  return (
    <div className='streambar-container'>
      <div className='streambar-section'>
        <button className='streambar-btn' id='p' onClick={onTabClick}>POWER</button>
      </div>

      <div className='streambar-section'>
        <button className='streambar-btn' id='e' onClick={onTabClick}>ENDURANCE</button>
      </div>

      <div className='streambar-section'>
        <button className='streambar-btn' id='a' onClick={onTabClick}>AGILITY</button>
      </div>

      <div className='streambar-section'>
        <button className='streambar-btn' id='prg' onClick={onTabClick}>PROGRESS</button>
      </div>
    </div>
  )
}
