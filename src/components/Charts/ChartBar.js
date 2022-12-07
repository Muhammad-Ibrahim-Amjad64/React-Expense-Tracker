import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let chartBarfill= "0%"
    
    if (props.max>0) {
        
         
        chartBarfill =`${Math.round((props.value/props.max)*100)}%`// concatination krke string mn convert 
        // chartBarfill = "50%" 
        
    }
    

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div style={{height:chartBarfill}}className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
