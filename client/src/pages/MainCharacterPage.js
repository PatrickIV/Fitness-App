import React from 'react';
import Actionbar from '../components/Actionbar';
import Navbar from "../components//Navbar";

function MainCharacterPage() {
  return (
    <>
      <Navbar />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Actionbar />
      </div>
    </>
  )
}

export default MainCharacterPage