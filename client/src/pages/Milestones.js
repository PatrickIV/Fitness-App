import React, { useState } from 'react'
import Streambar from '../components/Streambar';
import Pow from '../components/achievements/Pow'
import End from '../components/achievements/End';
import Agi from '../components/achievements/Agi';
import Prg from '../components/achievements/Prg';

export default function Milestones() {
  const [tab, setTab] = useState('p');
  
  function handleTabClick(e) {
    console.log(e.target.id);
    setTab(e.target.id);
  }

  if (tab === 'p') {
    return (
      <>
        <div className="sBar">
          <Streambar currentTab={tab} onTabClick={handleTabClick} />
        </div>
        <div className="achievInv">
          <Pow /> 
        </div>
      </>
    );
  }
  
  if (tab === 'e') {
    return (
      <>
        <div className="sBar">
          <Streambar currentTab={tab} onTabClick={handleTabClick} />
        </div>
        <div className="achievInv">
          <End /> 
        </div>
      </>
    );
  }

  if (tab === 'a') {
    return (
      <>
        <div className="sBar">
          <Streambar currentTab={tab} onTabClick={handleTabClick} />
        </div>
        <div className="achievInv">
          <Agi /> 
        </div>
      </>
    );
  }

  if (tab === 'prg') {
    return (
      <>
        <div className="sBar">
          <Streambar currentTab={tab} onTabClick={handleTabClick} />
        </div>
        <div className="achievInv">
          <Prg /> 
        </div>
      </>
    );
  }
}
