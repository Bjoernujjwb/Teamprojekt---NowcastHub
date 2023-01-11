import React, { useState, useEffect } from "react";
import { csv } from "d3";
import "./Style/General.css";
import {App, selectedValue} from "../App"

// const csvUrl = "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/data-truth/COVID-19/rolling-sum/2023-01-06_COVID-19_hospitalization.csv";
const csvUrl = "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/nowcast_viz_de/plot_data/2023-01-10_forecast_data.csv";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

 
    const row = (d) => {
//please change
      // d.value = +d.value;
      // d.date = new Date(d.date);

      //Wie kann ich q0.5 nutzen? Da macht mir nämlich der Punkt ein Problem.
      d.value = +d.mean;
      d.date = new Date(d.target_end_date);

      return d;
    };

    csv(csvUrl, row).then((loadedData) => {
      const filteredData = loadedData.filter((d) => d.location === "DE" && d.age_group === "00+" && d.model==="ILM-prop")
      setData(filteredData);
    });
  }, []);

  return data;
 

};
