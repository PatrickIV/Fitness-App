import React, { useEffect, useState } from 'react';
import Actionbar from '../components/Actionbar';
import Navbar from "../components/Navbar";

function MainCharacterPage() {
  // 0 - Regiment, 1 - Inventory, 2 - Profile, 3 - Leaderboard, 4 - Setting, 5 - START
  const [tab, setTab] = useState(2);
  useEffect(() => {
    // Get user info (age, weight, level, etc.)
    // Get strength stats (lv)
  }, []);

  function handleTabClick(e) {
    if (+e.target.id === 2 && tab === 2) {
      console.log(5);
      // send to other website
    } else {
      console.log(+e.target.id);
      setTab(+e.target.id);
    }
  }

  if (tab === 0) {
    return (
      <>
        <Navbar />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <Actionbar currentTab={tab} onTabClick={handleTabClick} />
        </div>
      </>
    );
  }

  if (tab === 1) {
    return (
      <>
        <Navbar />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <Actionbar currentTab={tab} onTabClick={handleTabClick} />
        </div>
      </>
    );
  }

  if (tab === 2) {
    return (
      <>
        <Navbar />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <Actionbar currentTab={tab} onTabClick={handleTabClick} />
        </div>
      </>
    );
  }

  if (tab === 3) {
    return (
      <>
        <Navbar />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <Actionbar currentTab={tab} onTabClick={handleTabClick} />
        </div>
      </>
    );
  }

  if (tab === 4) {
    return (
      <>
        <Navbar />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <Actionbar currentTab={tab} onTabClick={handleTabClick} />
        </div>
      </>
    );
  }
}

export default MainCharacterPage