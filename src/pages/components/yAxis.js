function YAxis(props){
    const { yScale, height, axisLable } = props;
    const ticks = yScale.ticks();
    console.log("yaxisticks:",ticks)
    if(yScale){
        return <g>
        <line y2={height} stroke={"black"}/>
        {yScale.ticks().map(ticks => (
            <g key={ticks} transform={`translate(-5, ${yScale(ticks)})`}>
                <line x2={5} stroke={'black'}/>
                <text style={{textAnchor:'end', fontSize:'10px'}}
                x = {0}>
                {ticks}
                </text>
            </g>
        ))}

            <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(20,0)rotate(-90)`}>
                {axisLable}
            </text>
        </g>
    } else {
        return <g></g>
    }

}

export default YAxis