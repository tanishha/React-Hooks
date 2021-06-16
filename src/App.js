import React,{useState} from "react";
import './App.css';

function App() {
  const [val,setVal]=useState("Tanisha");
  const changeVal=()=>{
    setVal('Tanisha Chaudhary')
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>{val}</h1>
       <button className="btn" onClick={changeVal}>Click me</button>
      </header>
    </div>
  );
}

export default App;
