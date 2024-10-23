//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate




function XAxis(props){
    const { xScale, height, width, axisLable } = props;
    const isLinear = typeof xScale.domain()[0] === 'number';
    //const ticks = xScale.ticks();
    //Note:
    //1. XAxis works for two cases: the xScale is linear (i.e., scatter plot) and the xScalse is discrete (i.e., bar chart)
    //2. you can use typeof(xScale.domain()[0]) to decide the return value
    //3. if typeof(xScale.domain()[0]) is a number, xScale is a linear scale; if it is a string, it is a scaleBand.
    
    if(xScale) {
        return (<g>
        <line x1 ={0} y1={height} x2={width} y2={height} stroke={'black'}/>
        {isLinear && xScale.ticks().map(ticks => (
                    <g key={ticks} transform={`translate(${xScale(ticks)}, ${height})`}>
                        <line y2={5} stroke={"black"} />
                        <text
                            style={{ textAnchor: 'middle', fontSize: '10px' }}
                            y ={15}
                        >
                            {ticks}
                        </text>   
            </g>))}
        {!isLinear && xScale.domain().map(tickValue => (
            <g key={tickValue} transform={`translate(${xScale(tickValue) + xScale.bandwidth() /2}, ${height})`}>
                <line y2={0} stroke={"black"} />
                <text
                    style={{ textAnchor: 'start', fontSize: '10px' }}
                    transform={`translate(20,0), rotate(70)`}
                    y={25} x={0}
                >
                    {tickValue}
                </text>
                </g>
            ))}
            

            <text
                    style={{ textAnchor: 'end', fontSize: '15px'}}
                    x={width}
                    y={height-5}
                >
                    {axisLable}
                </text>
        
        </g>);

        
    }else {
    return <g></g>
}
}

export default XAxis