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

    // Ensure xScale exists before proceeding
    if (!xScale) return <g></g>;

    const isLinear = typeof xScale.domain()[0] === 'number';

    return (
        <g>
            {/* Render the x-axis line */}
            <line x1={0} y1={height} x2={width} y2={height} stroke={'black'} />

            {/* Render linear scale ticks */}
            {isLinear && xScale.ticks().map(tick => (
                <g key={tick} transform={`translate(${xScale(tick)}, ${height})`}>
                    <line y2={5} stroke={"black"} />
                    <text style={{ textAnchor: 'middle', fontSize: '10px' }} y={15}>
                        {tick}
                    </text>
                </g>
            ))}

            {/* Render band scale ticks */}
            {!isLinear && xScale.domain().map(tickValue => (
                <g key={tickValue} transform={`translate(${xScale(tickValue) + xScale.bandwidth() / 2}, ${height})`}>
                    <line y2={5} stroke={"black"} />
                    <text
                        style={{ textAnchor: 'start', fontSize: '10px' }}
                        transform={`translate(20,0), rotate(70)`}
                        y={25}
                    >
                        {tickValue}
                    </text>
                </g>
            ))}

            {/* Render axis label */}
            <text style={{ textAnchor: 'end', fontSize: '15px' }} x={width} y={height - 5}>
                {axisLable}
            </text>
        </g>
    );
}


export default XAxis