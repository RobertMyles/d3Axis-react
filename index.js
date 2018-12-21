import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

const Axis = ({ x, y, type, position, domain, range }) => {
     let gRef = React.createRef();
     const [domain0, domain1] = domain;
     const [range0, range1] = range;

    useEffect(() => {
        d3render()
    })

    const d3render = () => {
        const scale = d3[`scale${type}`]()
                    .domain([domain0, domain1])
                    .range([range0, range1])
    
        const axis = d3[`axis${position}`](scale);

        d3.select(gRef.current).call(axis)
    }
    

    return (
        <>
            <g transform={`translate(${x}, ${y})`} ref={gRef} />
        </>
    )
}

const App = () => {
    return (
        <>
         <svg width="800" height="400">
        <Axis x={20} y={20} type={"Linear"} position={"Left"} domain={[0, 10]} range={[0, 200]}/>
        <Axis x={20} y={220} type={"Linear"} position={"Bottom"} domain={[0, 10]} range={[0, 200]}/>
        <Axis x={20} y={20} type={"Linear"} position={"Top"} domain={[0, 10]} range={[0, 200]}/>
        <Axis x={220} y={20} type={"Linear"} position={"Right"} domain={[0, 10]} range={[0, 200]}/>
        </svg>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
