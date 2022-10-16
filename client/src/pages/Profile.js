import React from 'react';
import Actionbar from '../components/Actionbar';
import RegistryStats from '../components/RegistryStats';

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

      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Actionbar />
      </div>
    </div>
  )
}