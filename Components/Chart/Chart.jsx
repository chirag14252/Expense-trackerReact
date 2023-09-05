import "./Chart.css"
import ChartBar from "./ChartBar";
const Chart = (props) =>{
    const dataPointValues = props.datapoints.map((item)=>{
            return item.value;
    });
   const totalMaximum = Math.max(...dataPointValues);
    return(
        <div className="chart">
            {   
                props.datapoints.map((datapoint)=>{
                    return <ChartBar key = {datapoint.label} value = {datapoint.value} maxValue ={totalMaximum} label = {datapoint.label}/>
                })
                
            }
        </div>
    )
}

export default Chart;