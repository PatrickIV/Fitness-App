import React from 'react';
import RegistryStats from './stats/RegistryStats';
import ProgressStats from './stats/ProgressStats';

export default function Profile() {
  return (
    <div>
      {/* button to edit statistics */}

      {/* registry stats */}
      <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
        <RegistryStats />
      </div>

      {/* bitmoji api implementation */}
      <div style={{ position: "absolute"}}>
        
      </div>

      {/* progression stats */}
      <div>
        <ProgressStats />
      </div>

      {/* won't need this if this is just used as a component for the main menu
       <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Actionbar />
      </div> */}
    </div>
  )
}