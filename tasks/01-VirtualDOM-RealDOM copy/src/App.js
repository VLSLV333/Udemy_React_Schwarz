import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App running!");

  const buttonHandler = useCallback(() => {
    // showParagraph ? setShowParagraph(false) : setShowParagraph(true)
    setShowParagraph((prevState) => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={buttonHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
