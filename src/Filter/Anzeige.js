import { useState } from "react";

const initialValueAnzeige = "absoluteZahlen";

export const Anzeige = () => {
  const [anzeige, setAnzeige] = useState(initialValueAnzeige);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <label>Pro 100.000: </label>
      <input
        type="radio"
        name="größe"
        value="hunderttausend"
        onChange={(e) => setAnzeige(e.target.value)}
        checked={anzeige === "hunderttausend"}
      />
      <label>Anzeige: </label>{" "}
      <input
        type="radio"
        name="größe"
        value="absoluteZahlen"
        onChange={(e) => setAnzeige(e.target.value)}
        checked={anzeige === "absoluteZahlen"}
      />
    </div>
  );
};
