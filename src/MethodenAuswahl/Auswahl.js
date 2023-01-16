import React, { useState } from "react";
import "./DesignMethoden.css";

export const DatenstandButton = () => {
  const [isDatenstand, setDatenstand] = useState(true);
;



  function handleClick() {
    setDatenstand(!isDatenstand);
  }
  return (
    <div className={`container ${isDatenstand ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`datenstand ${isDatenstand ? "bold" : ""}`} onClick={handleClick}>Datenstand</p>
    </div>
  );
};
 
export const EpiforecastButton = () => {
  const [isEpiforecast, setEpiforecast] = useState(true);
  


  function handleClick() {
    setEpiforecast(!isEpiforecast);
  }

  return (
    <div className={`container ${isEpiforecast ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`Epiforecast ${isEpiforecast ? "bold" : ""}`} onClick={handleClick}>Epiforecast-independent</p>
    </div>
  );
};

export const ILMButton = () => {
  const [isILM, setILM] = useState(false);
  
  function handleClick() {
    setILM(!isILM);
  }

  return (
    <div className={`container ${isILM ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`ILM ${isILM ? "bold" : ""}`} onClick={handleClick}>ILM-prop</p>
    </div>
  );
};

export const KITButton = () => {
  const [isKIT, setKIT] = useState(false);
  
  function handleClick() {
    setKIT(!isKIT);
  }

  return (
    <div className={`container ${isKIT ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`KIT ${isKIT ? "bold" : ""}`} onClick={handleClick}>KIT-simple_nowcast</p>
    </div>
  );
};

export const LMUButton = () => {
  const [isLMU, setLMU] = useState(false);
  
  function handleClick() {
    setLMU(!isLMU);
  }

  return (
    <div className={`container ${isLMU ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`LMU ${isLMU ? "bold" : ""}`} onClick={handleClick}>LMU_StaBlab-GAM_nowcast</p>
    </div>
  );
};


export const NowcastButton = () => {
  const [isNowcast, setNowcast] = useState(false);
  
  function handleClick() {
    setNowcast(!isNowcast);
  }

  return (
    <div className={`container ${isNowcast ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`Nowcast ${isNowcast ? "bold" : ""}`} onClick={handleClick}>NowcastHub-MeanEnsemble</p>
    </div>
  );
};

export const RIVMButton = () => {
  const [isRIVM, setRIVM] = useState(false);
  
  function handleClick() {
    setRIVM(!isRIVM);
  }

  return (
    <div className={`container ${isRIVM ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`RIVM ${isRIVM ? "bold" : ""}`} onClick={handleClick}>RIVM-KEW</p>
    </div>
  );
};


export const RKIButton = () => {
  const [isRKI, setRKI] = useState(false);
  
  function handleClick() {
    setRKI(!isRKI);
  }

  return (
    <div className={`container ${isRKI ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`RKI ${isRKI ? "bold" : ""}`} onClick={handleClick}>RKI-weekley_report</p>
    </div>
  );
};


export const SUButton = () => {
  const [isSU, setSU] = useState(false);
  
  function handleClick() {
    setSU(!isSU);
  }

  return (
    <div className={`container ${isSU ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`SU ${isSU ? "bold" : ""}`} onClick={handleClick}>SU-hier_bayes</p>
    </div>
  );
};


export const SZButton = () => {
  const [isSZ, setSZ] = useState(false);
  
  function handleClick() {
    setSZ(!isSZ);
  }

  return (
    <div className={`container ${isSZ ? "moved" : ""}`} onClick={handleClick}>
      <hr className="line"/>
      <p className={`SZ ${isSZ ? "bold" : ""}`} onClick={handleClick}>SZ-hosp_nowcast</p>
    </div>
  );
};