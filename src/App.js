import React from "react";
import "./AAOverall.css";
import { MethodenDiv } from "./MethodenAuswahl/Methoden";
import { FilterAufbau } from "./Filter/FilterAufbau";

export const App = () => {
  return (
    <div className="wrapper">
      <FilterAufbau />
      <MethodenDiv />
    </div>
  );
};

export default App;
