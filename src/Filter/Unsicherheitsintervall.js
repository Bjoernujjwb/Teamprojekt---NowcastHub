import { useState } from "react";

const initialValueIntervall = "keines";

export const Unsicherheitsintervall = () => {
  const [intervall, setIntervall] = useState(initialValueIntervall);
  console.log(intervall);
  return (
    <div>
      95 % :{" "}
      <input
        type="radio"
        name="unsicherheitsintervall"
        value="95%"
        onChange={(e) => setIntervall(e.target.value)}
        defaultChecked
      />
      50 % :{" "}
      <input
        type="radio"
        name="unsicherheitsintervall"
        value="50%"
        onChange={(e) => setIntervall(e.target.value)}
        defaultChecked
      />
      keines :{" "}
      <input
        type="radio"
        name="unsicherheitsintervall"
        value="keines"
        onChange={(e) => setIntervall(e.target.value)}
        defaultChecked
      />
    </div>
  );
};
