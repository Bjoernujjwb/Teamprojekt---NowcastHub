import React, { useState } from "react";
import "./MethodenOverallundGraph.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import {
  DatenstandButton,
  EpiforecastButton,
  ILMButton,
  KITButton,
  LMUButton,
  NowcastButton,
  RIVMButton,
  RKIButton,
  SUButton,
  SZButton,
} from "./Auswahl";
import { Graph } from "../components/Graph";

export const MethodenDiv = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState("Methoden einblenden");

  function handleClick() {
    setIsVisible(!isVisible);
    setLabel(isVisible ? "Methoden einblenden" : "Methoden ausblenden");
  }

  return (
    <div className="GraphundMethoden">
      <Graph className="graph" isVisible={isVisible} />
      <div className="MethodenEinblenden">
        <button className="RoundButton" onClick={handleClick}>
          {isVisible ? (
            <FiChevronRight className="iconPfeil" />
          ) : (
            <FiChevronLeft className="iconPfeil" />
          )}
        </button>
        <label id="methodenEinblenden" onClick={handleClick}>
          {label}
        </label>
      </div>
      {isVisible && (
        <div className="auswahl">
          <DatenstandButton />
          <EpiforecastButton />
          <ILMButton />
          <KITButton />
          <LMUButton />
          <NowcastButton />
          <RIVMButton />
          <RKIButton />
          <SUButton />
          <SZButton />
        </div>
      )}
    </div>
  );
};
