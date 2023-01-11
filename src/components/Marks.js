import "./Style/General.css";
import { line, curveNatural } from "d3";


export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius,
}) => (
  <g className = "mark">
    <path
    fill="none"
    stroke="black"
      d={line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))(data)
        // .curve(curveNatural)(data) -> um Ecken runder zu machen
      }
    />
    {data.map((d) => (
      <circle
        // className="mark"
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))
    }
  </g>
);
