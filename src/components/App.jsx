import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [handleMouse, setButtonColor] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }
  function mouseOver() {
    setButtonColor(true);
  }
  function mouseOut() {
    setButtonColor(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        style={{ backgroundColor: handleMouse ? "black" : "white" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >Submit</button>
    </div>
  );
}

export default App;
