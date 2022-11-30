import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";



const renderActiveShape = (props, setCurrentChartProject) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" style={{ fontWeight: "bold", letterSpacing: "1.1", textTransform: "uppercase" }} fill={'#86BBEB'}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={"#0984e3"}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={'#9c88ff'}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="#82589F"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="#82589F" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#FC427B"
                className={"chartText"}
                style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "poppins", letterSpacing: "1.1px" }}
            >{`${value} Projects`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={22}
                style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "poppins", letterSpacing: "1.1px" }}
                textAnchor={textAnchor}
                className={"chartText"}
                fill="#3498db"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={45}
                textAnchor={textAnchor}
                style={{ fontSize: "12px" }}
                className={"chartText"}
                fill="#3498db"
            >
                {/* Click to see {payload.name} projects */}
            </text>
        </g>
    );
};

export default function PiechartBox({ handleClick, chartData }) {


    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );




    return (
        <PieChart width={430} height={300} >
            < Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={chartData}
                cx={200}
                cy={170}
                innerRadius={70}
                outerRadius={100}
                fill="#a55eea"
                dataKey="value"
                onMouseEnter={onPieEnter}
                onClick={(e, i) => {
                    handleClick(e.name)
                }
                }
            />
        </PieChart >
    );
}
