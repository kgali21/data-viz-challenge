import React from 'react';
import { BarStack } from '@visx/shape';
import { Group } from '@visx/group';
import { Grid } from '@visx/grid';
import { AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { timeFormat, timeParse } from 'd3-time-format';
import { useTooltipInPortal, defaultStyles, useTooltip } from '@visx/tooltip';
import { LegendOrdinal } from '@visx/legend';

import salesData from '../data/dataSales.js';

const green = '#71EEB8';
const coral = '#FF7F50';
const blue = '#87CEEB';
const background = 'grey'
const defaultMargins = {
  top: 40,
  right: 0,
  bottom: 0,
  left: 0
};

const toolTipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: "rgba(0,0,0,0.9)",
  color: "white"
}

const data = salesData;

console.log(data, 'predata')

const dataMassaged = data.map(newObj => {
 const returnObj = ({date: newObj.Date, salesPerson: newObj.Salesperson, sales: newObj.Sales})
  return returnObj
}).reduce((a, c) => {
  let x = a.find(e => e.date === c.date && e.salesPerson === c.salesPerson);
  if(!x) {
    a.push(Object.assign({}, c))
  } else {
    x.sales = Number(c.sales) + Number(x.sales)
  }
  return a
}, []).map(newObj => {

  return ({
    date: newObj.date,
    [newObj.salesPerson]: newObj.sales,
  })
})

const result = Object.values(dataMassaged.reduce((a, c) => {
    a[c.date] = Object.assign(a[c.date] || {}, c);
    return a;
}, {}))

console.log(result, 'results')
// const salesPersonSales = newObject.Sales.includes('$') ? parseInt(newObject.Sales.slice(1)) : parseInt(newObject.Sales, 10)
// x.sales.includes('$') ? parseInt(x.sales.slice(1)) + parseInt(c.sales.slice(1)) : parseInt(x.sales, 10) + parseInt(c.sales, 10)

const keys = Object.values(data.map(newData => newData.Salesperson))
const newKeys = [...new Set(keys)]

console.log(newKeys, 'keys')


// rework this and you get the first graph
const salesTotals = result.map(newRes => {
  const newObj = Object.values(newRes).splice(1);
  
  const newNewObj = newObj.map(newEle => {
    return newEle
  })

  if(newNewObj.includes('$')){
    return parseInt(newNewObj.slice(1), newNewObj)
  } else {
    return parseInt(newNewObj, 10)
  }

})


console.log(salesTotals, 'salesTotals')

const parseDate = timeParse("%Y-%m-%d");
const format = timeFormat("%b %d");
const formatDate = (date) => format(parseDate(date));

const getDate = (d) => d.Date;

const dateScale = scaleBand({ domain: data.map(getDate), padding: 0.2 });
const salesScale = scaleLinear({
  domain: [0, ...salesTotals],
  nice: true
});
const colorScale = scaleOrdinal({
  domain: newKeys,
  range: [green, coral, blue]
});


let tooltipTimeout;

const SalesBarStack = ({ width, height, event = false, margin = defaultMargins }) => {
  const {
    tooltipOpen,
    tooltipTop,
    tooltipLeft,
    hideTooltip,
    showTooltip,
    tooltipData,
  } = useTooltip();

  const { containerRef, TooltipInPortal } = useTooltipInPortal();

  if(width < 10) return null;

  const xMax = width;
  const yMax = height - margin.top - 100;

  dateScale.rangeRound([0, xMax]);
  salesScale.range([yMax, 0]);

  console.log({result, newKeys}, 'resultsnewKeys');


  return width < 10 ? null : (
    <div style={{ position: "relative" }}>
      <svg ref={containerRef} width={width} height={height}>
        <rect 
          x={0}
          y={0}
          width={width}
          height={height}
          fill={background}
          rx={14}
        />
        <Grid 
          top={margin.top}
          left={margin.left}
          xScale={dateScale}
          yScale={salesScale}
          width={xMax}
          height={yMax}
          stroke="black"
          strokeOpacity={0.1}
          xOffset={dateScale.bandwidth() / 2}
        />
        <Group top={margin.top}>
            <BarStack 
              data={result}

              keys={newKeys}
              x={getDate}
              xScale={dateScale}
              yScale={salesScale}
              color={colorScale}
            >
              {
                (barStacks) => 
                  barStacks.map((barStack) => 
                    barStack.bars.map((bar) => (
                      <rect 
                        key={`bar-stick-${barStack.index}-${bar.index}`}
                        x={bar.x}
                        y={bar.y}
                        height={bar.height}
                        width={bar.width}
                        fill={bar.color}
                        onClick={() => {
                          if(event) alert(`Clicked: ${JSON.stringify(bar)}`)
                        }}
                        onMouseLeave={() => {
                          tooltipTimeout = window.setTimeout(() => {
                            hideTooltip();
                          }, 300)
                        }}
                        onMouseMove={(event) => {
                          if (tooltipTimeout) clearTimeout(tooltipTimeout);
                          const top = event.clientY - margin.top - bar.height;
                          const left = bar.x + bar.width / 2;
                          showTooltip({
                            tooltipData: bar,
                            tooltipTop: top,
                            tooltipLeft: left
                          })
                        }}
                      />
                    ))
                  )
              }
          </BarStack>
        </Group>
       <AxisBottom
       top={yMax + margin.top}
       scale={dateScale}
       tickFormat={formatDate}
       stroke={blue}
       tickStroke={blue}
       tickLabelProps={() => ({
         fill: blue,
         fontSize: 11,
         textAnchor: "middle"
       })}
       /> 
      </svg>
      <div style={{
        position: "absolute",
        top: margin.top / 2 - 10,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontSize: 14
      }}>
        <LegendOrdinal
          scale={colorScale}
          direction="row"
          labelMargin="0 15px 0 0"
        />
      </div>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal 
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
          styles={toolTipStyles}
        >
          <div style={{ color: colorScale(tooltipData.key) }}>
            <strong>{tooltipData.key}</strong>
          </div>
          <div>{tooltipData.bar.data[tooltipData.key]}sales</div>
          <div>
            <small>{formatDate(getDate(tooltipData.bar.data))}</small>
          </div>
        </TooltipInPortal>
      )}
    </div>
  );
};

export default SalesBarStack;