import React, { useState } from "react";

export const DatePicker = () => {
  const [date, setDate] = useState();

  return (
    <div className="container">
      <label>Datenstand:</label>
      <div>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </div>
    </div>
  );
};
