import React from 'react';
import { BarStack } from '@visx/shape';
import { Group } from '@visx/group';
import { Grid } from '@visx/grid';
import { AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { timeFormat, timeParse } from 'd3-time-format';
import { useTooltipInPortal, defaultStyles, useTooltip } from '@visx/tooltip';
// import { LegendOrdinal } from '@visx/legend';

import salesData from '../data/dataSales.js';

const green = '#71EEB8';
const coral = '#FF7F50';
const blue = '#87CEEB';
const yellow = '#FFFF00';
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
 const returnObj = ({date: newObj.Date, product: newObj.Product, sales: newObj.Sales})
  return returnObj
}).reduce((a, c) => {
  let x = a.find(e => e.date === c.date && e.product === c.product);
  if(!x) {
    a.push(Object.assign({}, c))
  } else {
    x.sales = Number(c.sales) + Number(x.sales)
  }
  return a
}, []).map(newObj => {
  return ({
    date: newObj.date,
    [newObj.product]: newObj.sales,
  })
})

console.log(dataMassaged, 'byProductByDateByCount')

const result = Object.values(dataMassaged.reduce((a, c) => {
    a[c.date] = Object.assign(a[c.date] || {}, c);
    return a;
}, {}))

console.log(result, 'results')

const keys = Object.values(data.map(newData => newData.Product))
const newKeys = [...new Set(keys)];
const poppedKeys = newKeys.pop();

console.log(poppedKeys, 'keys')


// rework this and you get the first graph
const salesTotals = result.map(newRes => {
    const newObj = Object.values(newRes).splice(1);
    
    const newNewObj = newObj.map(newEle => {
      return newEle
    })
  
    return parseInt(newNewObj, 10)
  
  })

//   const salesTotals = result.map(product => {
//     const total = Object.values(product).toString().split(',')
//     const newProduct = total.map(newVals => {
//         return parseInt(newVals.replace('$', ''))
//     }).slice(1)
//     return newProduct;
//   })

// const salesTotals = result.map(product => {
//     // const total = parseInt(product.Shoes.toString().replace('$', '')) + parseInt(product.Socks.toString().replace('$', '')) + parseInt(product.Sandals.toString().replace('$', ''))
//     
//     return totals;
//   })



  console.log(salesTotals, 'byProductSales')


const parseDate = timeParse("%Y-%m-%d");
const format = timeFormat("%b %d");
const formatDate = (date) => format(parseDate(date));

const getDate = (d) => d.date;

const dateScale = scaleBand({ domain: result.map(getDate), padding: .075 });
const salesScale = scaleLinear({
  domain: [0, Math.max(...salesTotals)],
  nice: true
});
const colorScale = scaleOrdinal({
  domain: newKeys,
  range: [green, coral, blue, yellow]
});

let tooltipTimeout;

const SalesByProduct = ({ width, height, event = false, margin = defaultMargins }) => {
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
  const yMax = height - margin.top - 40;

  dateScale.rangeRound([0, xMax]);
  salesScale.rangeRound([yMax, 0]);

  console.log({result, newKeys}, 'resultsNewKeys');

  return width < 10 || height === 0 ? null : (
    <div style={{ position: "relative", left: '2em', top: '2em' }}>
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
          strokeOpacity={.5}
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
                    barStack.bars.map((bar) => {
                      return (
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
                          const top = event.clientY;
                          const left = bar.x + bar.width;
                          showTooltip({
                            tooltipData: bar,
                            tooltipTop: top,
                            tooltipLeft: left
                          })
                        }}
                      />
                    )})
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
        {/* <LegendOrdinal
          scale={colorScale}
          direction="row"
          labelMargin="0 15px 0 0"
        /> */}
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
          <div>{tooltipData.bar.data[tooltipData.key]} salesCount</div>
          <div>
            <small>{formatDate(getDate(tooltipData.bar.data))}</small>
          </div>
        </TooltipInPortal>
      )}
    </div>
  );
};

export default SalesByProduct;