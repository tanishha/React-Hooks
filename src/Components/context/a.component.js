import React, { createContext } from "react";
import BComponent from "./b.component";
const fname = createContext();

const AComponent = () => {
  return (
    <fname.Provider value="Tanisha Chaudhary">
      <BComponent />
    </fname.Provider>
  );
};

export { AComponent, fname };
