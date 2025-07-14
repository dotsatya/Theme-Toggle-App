import React, { useRef } from "react";
import { useContext } from "react";

{/* //for dark mode toggleTheme */ }
import { ThemeContext } from "../../context/ThemeContext";

import "./Mode.css";


// import "./App.css";

function Mode() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMouseMove = (e) => {
    const box = e.currentTarget; // ✅ No ref — target the hovered box only
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const angle = (Math.atan2(y - rect.height / 2, x - rect.width / 2) * 180) / Math.PI;

    box.style.setProperty('--start', angle.toFixed(2)); // ✅ Set per box
  };


  return (

    <div className="section">
      <div className="App">
        <h1>Mode</h1>
      </div>
      <div className="container">
        <div className="boxes">
          <div  onMouseMove={handleMouseMove} // Track mouse movement inside it
            className="box box1">
            <h2> Title</h2>

            <h3>SubTitle</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adsapiente niapiente
              voluptates!
            </p>
          </div>
          <div onMouseMove={handleMouseMove} // Track mouse movement inside it
            className="box box2">
            {" "}
            <p>Lorem ipsum dcilis iure  voluptates!</p>
          </div>
          <div onMouseMove={handleMouseMove} className="box box3">
            {" "}
            <p>Lorein cum fugrrupti facilis iure sapiente voluptates!</p>
          </div>
          <div onMouseMove={handleMouseMove} className="box box4">
            {" "}
            <p>
              Lorempti facilis iure sapiente voluptates!
            </p>
          </div>
          <div onMouseMove={handleMouseMove} className="box box5">
            {" "}
            <p>Lorem ipcing elit!</p>
          </div>
        </div>

        {/* //for dark mode toggleTheme */}
        <button className="btn" onClick={toggleTheme}>Click for Toggle Mode</button>
      </div>
    </div>
  );
}

export default Mode;