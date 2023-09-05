import { useEffect, useState } from "react";
import "./calc.css";
import Button from "./components/Button";

function App() {
  const [displayText, setDisplayText] = useState(0);
  const [memory, setMemory] = useState(0);
  const [action, setAction] = useState("");

  useEffect(() => {
    console.log("Updated dispText=", displayText, ". Updated memory=", memory);
  }, [displayText, memory]);

  function myplus() {
    console.log("plus pressed");
    setAction("+");
    setMemory(memory + Number(displayText));
    setDisplayText(0);
  }

  function dotclick() {
    console.log("dotclick pressed");
  }

  function calcEquals() {
    if (action === "+") {
      setDisplayText(memory + Number(displayText));
    }
    setAction("=");
    setMemory(0);
  }

  function myclear() {
    console.log("clear pressed");
    setDisplayText(0);
    setMemory(0);
  }
  function myclick(e) {
    if (displayText === 0 || action === "=") {
      setDisplayText(e.target.innerText);
      action === "=" && setAction("");
    } else {
      setDisplayText(displayText + e.target.innerText);
    }
    console.log("dispText=", displayText);
    // setAction("click");
  }

  return (
    <>
      <div className="calc-body">
        {/* <!-- Calculator Display Screen --> */}
        <div className="calc-screen">
          <div id="calc-operation"></div>
          <div id="calc-typed">{displayText}</div>
        </div>

        {/* <!-- Calculator Buttons --> */}
        <div class="calc-button-row">
          <Button buttonClass="ac" buttonText="AC" clickFunction={myclear} />
          <Button buttonClass="opt" buttonText="+/-" />
          <Button buttonClass="opt" buttonText="%" />
          <Button buttonClass="opt" buttonText="/" />
          <Button clickFunction={myclick} buttonText="7" />
          <Button clickFunction={myclick} buttonText="8" />
          <Button clickFunction={myclick} buttonText="9" />
          <Button buttonClass="opt" buttonText="X" />
          <Button clickFunction={myclick} buttonText="4" />
          <Button clickFunction={myclick} buttonText="5" />
          <Button clickFunction={myclick} buttonText="6" />
          <Button buttonClass="opt" buttonText="-" />
          <Button clickFunction={myclick} buttonText="1" />
          <Button clickFunction={myclick} buttonText="2" />
          <Button clickFunction={myclick} buttonText="3" />
          <Button clickFunction={myplus} buttonClass="opt" buttonText="+" />

          <Button clickFunction={myclick} buttonText="0" />
          <Button clickFunction={dotclick} buttonText="." />
          <Button buttonText="&#9003;" />
          <Button clickFunction={calcEquals} buttonClass="opt" buttonText="=" />
        </div>
      </div>
    </>
  );
}

export default App;
