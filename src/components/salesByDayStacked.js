import React from 'react';
import { BarStack } from '@visx/shape';
import { Group } from '@visx/group';
import { Grid } from '@visx/grid';
import { AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { timeParse, timeFormat } from 'd3-time-format';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { LegendOrdinal } from '@visx/legend';

import salesData from '../data/dataSales';

const green = '#93E9BE';
const pink = '#FF7F50';
const blue = '#9cc8c6';
const background = 'white';
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
};

const data = salesData;
const keys = Object.keys(data.filter((d) => d !== "Date"));

const salesTotals = data.reduce((cVal, accDate) => {
    const totalSales = keys.reduce((cValTotal, acc) => {
        cValTotal += Number(accDate[acc]);
        return cValTotal;
    }, 0);
    if(Array.isArray(cVal)) {
        cVal.push(totalSales);
        return cVal;
    }
    return [];
});

const parseDate = timeParse("%Y-%m-%d");
const format = timeFormat("%d %d");
const formatDate = (date) => format(parseDate(date.date))


const getDate = d => d.Date

const dateScale = scaleBand({
    domain: data.map(getDate),
    padding: 0.2
});
const salesScale = scaleLinear({
    domain: [0, Math.max(...salesTotals)],
    nice: true
})
const colorScale = scaleOrdinal({
    domain: keys,
    range: [green, pink, blue]
})

let toolTipTimeout;

const SalesByDayChart = ({ width, height, events = false, margin = defaultMargins}) => {

    const {
        tooltipOpen,
        tooltipLeft,
        tooltipTop,
        tooltipData,
        hideTooltip,
        showTooltip,
    } = useTooltip();

    const { containerRef, TooltipInPortal } = useTooltipInPortal();

    if(width < 10) return null;
    const xMax = width;
    const yMax = height - margin.top - 100;

    dateScale.rangeRound([0, xMax]);
    salesScale.range([yMax, 0])

    return width < 10 ? null : (
        <div>
            <svg ref = {containerRef} width={width} height={height}>
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
                    data={data}
                    keys={keys}
                    x={getDate}
                    xScale={dateScale}
                    yScale={salesScale}
                    color={colorScale}
                    >
                        {(barStacks) => barStacks.map((barStack) => barStack.bars.map((bar) =>(
                            <rect
                                key={`bar-stack-${barStack.index} - ${bar.index}`}
                                x = {bar.x}
                                y = {bar.y}
                                height={bar.height}
                                width={bar.width}
                                fill={bar.color}
                                onClick={() => {
                                    if(events) alert(`clicked: ${JSON.stringify(bar)}`)
                                }}
                                onMouseLeave={() => {
                                    toolTipTimeout = window.setTimeout(() => {
                                        hideTooltip();
                                    }, 300)
                                }}
                                onMouseMove={(event) => {
                                    if(toolTipTimeout) clearTimeout(toolTipTimeout);
                                    const top = event.clientY - margin.top - bar.height;
                                    const left = bar.x + bar.width / 2;
                                    showTooltip({
                                        tooltipData: bar,
                                        tooltipTop: top,
                                        tooltipLeft: left
                                    })
                                }}
                            />
                        )))}
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
                        textAnchor: 'middle'
                    })}
                />
            </svg>
            <div
                style={{
                    position: "absolute",
                    top: margin.top / 2 - 10,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "14px"
                  }}
            >
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
                    style={toolTipStyles}
                >
            <div style={{ color: colorScale(tooltipData.key) }}>
                <strong>{tooltipData.key}</strong>
            </div>
          <div>{tooltipData.bar.data[tooltipData.key]}℉</div>
          <div>
            <small>{formatDate(getDate(tooltipData.bar.data))}</small>
          </div>
                </TooltipInPortal>
            )}
        </div>
    )
}

export default SalesByDayChart;