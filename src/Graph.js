import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv, scaleLinear, scaleTime, max, format, timeFormat, extent, nest } from 'd3';
import { useData } from './components/useData';
import { useKITData } from './components/kitModell';
import { AxisBottom } from './components/AxisBottom';
import { AxisLeft } from './components/AxisLeft';
import { Marks } from './components/Marks';
import "./components/Style/General.css"

const width = 1400;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 100 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

export const Graph = () => {

  const data = useData(); 

  // var data = nest() 
  //   .key(d => d.model)
  //   .entries(data1);
  
  //   var mediaName = sumstat.map(d => d.key) 
  //   var color = d3.scaleOrdinal().domain(mediaName).range(colorbrewer.Set2[6])




  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  
  //please change

  const xValue = d => d.date;
  const xAxisLabel = 'Zeit';

  const yValue = d => d.value;
  const yAxisLabel = 'Corona Fälle';


  // const siFormat = format('.2s');
  // const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

  const xAxisTickFormat = timeFormat("%m/%d/%Y")

  //Für das richtige timeformat siehe: https://gist.github.com/zanarmstrong/ca0adb7e426c12c06a95

  
  //vll wieder zu scaleLinear ändern
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight /
            2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={3}
        />

      </g>
    </svg>
  );

};
