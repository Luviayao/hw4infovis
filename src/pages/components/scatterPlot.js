import React from 'react'
import Points from './points';
import YAxis from './yAxis';
import XAxis from './xAxis';

function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedItem, setItem, pageX, setTooltipX, pageY, setTooltipY} = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 

    return <g transform = {`translate(${offsetX}, ${offsetY})`}>
           <Points r={5} c={"steelblue"} data={data} xScale={xScale} yScale={yScale} height={height} width={width}
           selectedItem={selectedItem} setItem={setItem} pageX={pageX} setTooltipX={setTooltipX}
           pageY={pageY} setTooltipY={setTooltipY}
           />
           <YAxis yScale={yScale} height={height} axisLable={"Trip duration end in"}/>
           <XAxis xScale={xScale} height={height} width={width} axisLable={"Trip duration start from"}/>
        </g>
}

export default ScatterPlot