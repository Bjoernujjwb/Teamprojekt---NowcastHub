import { Graph } from "./Graph";
import { MenuScope } from "./Menus/ScopeFilter";
import { MenuAge } from "./Menus/AlterFilter";
import React, { useState } from "react";

export const App = () => {
  return (
    <div>
      <div>
      <MenuScope />
      <MenuAge />
      </div>
      <Graph />
    </div>
  );
};

export default App;

