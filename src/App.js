import React from "react";
import "./App.css";
import {AComponent} from "./Components/context/a.component";
import CounterComponent from "./Components/counterComponent/counter.component";
import GithubComponent from "./Components/githubComponent/github.component";
import IncreDcre from "./Components/incdecComponent/incdec.component";

function App() {
  return (
    <div className="App">
    <CounterComponent/>
      {/* <GithubComponent /> */}
      {/* <IncreDcre/> */}
      <AComponent/>
    </div>
  );
}

export default App;
