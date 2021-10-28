import React from 'react';

import salesData from '../data/dataSales';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';

const SalesByDay = () => {
    const data = salesData;

    const width = 500;
    const height = 500;
    const margin = { top: 20, 
                     bottom: 20,
                     left: 20,
                     right: 20
                    };
    
    const xMax = width - margin.left - margin.right;
    const yMax = width - margin.top - margin.bottom;
    
    const x = d => new Date(d.Date);           

    const y = d =>{ 
        if(d.Sales.includes('$') === true) {
            return parseInt(d.Sales.slice(1))
        } else {
            return parseInt(d.Sales, 10)
        }
};
    
    const xScale = scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.map(x),
        padding: 0.4
    });
    const yScale = scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(y))]
    });
    
    const compose = (scale, accessor) => data => scale(accessor(data));
    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);

    return (
        <svg width={width} height={height}>
            {data.map((d, i) => {
                const barHeight = yMax - yPoint(d);
                return (
                    <Group key={`bar-${i}`}>
                        <Bar
                            x = {xPoint(d)}
                            y = {yMax - barHeight}
                            height = {barHeight}
                            width = {xScale.bandwidth()}
                            fill = "black" 
                        />
                        <text
              x={xScale(x(d))}
              y={yMax - barHeight}
              fill="black"
              fontSize={12}
              dx={".2em"}
              dy={"-.33em"}
              style={{ fontFamily: "arial" }}
            >
                {`${d.Product}`}
            </text>
            <text
              x={xScale(x(d))}
              y={yMax}
              fill="red"
              fontSize={14}
              dx={".32em"}
              dy={"1em"}
              textAnchor="middle"
            >
                {`${y(d)}`}
            </text>
                    </Group>
                )
            })}

        </svg>
    )

}

export default SalesByDay;