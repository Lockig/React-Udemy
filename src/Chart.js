import React from "react";
import ChartBar from "./ChartBar"
const Chart = (props) =>{
    return(
        <div className="chart">
            {
                props.dataPoints
            }

        </div>
    )
}

export default Chart;