import logo from './logo.svg';
import { useState } from "react";
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState(" ");
  const [outputText, setOutputText] = useState("");

  const convertText = () => {
    let newText = inputText.replace(/ +/g, " ")

    setOutputText(newText);
    setInputText(newText);
  }

  const handleEnter = (e) => {
    if ((e.keyCode === 13)) {
      convertText();
      setInputText("");
    }
  }

  return (
    <div className="App">
      <div className="inputs">
        <button onClick={() => setInputText("")}>Clear</button>
        <input type="text" onKeyDown={handleEnter} onChange={(e) => setInputText(e.target.value)} value={inputText}></input>
        <button onClick={() => {convertText(); setInputText("")}}>Submit</button>
      </div>
      <p className="outputText">{outputText}</p>
    </div>
  );
}

export default App;
