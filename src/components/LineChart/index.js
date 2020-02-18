import React, { useEffect, useState } from 'react'

export const LineChart = (props) => {
    const axisColor = 'lightgrey'
    const lineColor = 'cadetblue'
    const [lines, setLines] = useState(null)
    const [points, setPoints] = useState(null)

    useEffect(() => {
        const sortedData = getSortedData()
        buildLines(sortedData)
        buildCircles(sortedData)
    }, [])

    const buildLines = (sortedData) => {
        const lines = sortedData.map((point, index, array) => {
            if (index + 1 < array.length) {
                return drawLine(
                    sortedData[index].date,
                    sortedData[index + 1].date,
                    100 - sortedData[index].value,
                    100 - sortedData[index + 1].value,
                    index)
            } else {
                console.log('out of boundaries')
            }
        })
        setLines(lines)
    }

    const buildCircles = (sortedData) => {
        const points = sortedData.map((point, index, array) => {
            const inRange = isWithingRange(point.value)
            return drawCircle(
                point.date,
                100 - point.value,
                inRange,
                index)
        })
        setPoints(points)
    }

    // TODO add text x axis
    const drawXAxis = () => {
        return <line x1="0" x2="100" y1="100" y2="100" stroke={axisColor} strokeWidth="1" />
    }

    // TODO add text y axis
    const drawYAxis = () => {
        return <line x1="0" x2="0" y1='0' y2='100' stroke={axisColor} strokeWidth="1" />
    }

    const drawLine = (x1, x2, y1, y2, key) => {
        return <line x1={x1} x2={x2} y1={y1} y2={y2} stroke={lineColor} key={key} strokeWidth='0.2' />
    }

    // TODO hover and show popover
    const drawCircle = (cx, cy, isWithingRange = true, key) => {
        return <circle cx={cx} cy={cy} r="1" fill={isWithingRange ? lineColor : '#F08080'} key={key} />
    }

    const drawGraphArea = (x, y, width, height) => {
        const sortedData = props.referenceRanges.sort((a, b) => a - b)

        return <rect x={0} y={100 - sortedData[1]} width={100} height={sortedData[1] - sortedData[0]} opacity="0.2" fill={lineColor} />
    }

    const isWithingRange = (y) => {
        if (!props.referenceRanges) return true

        const refRanges = props.referenceRanges.sort((a, b) => a - b)

        return y <= refRanges[1] && y >= refRanges[0]
    }

    const getSortedData = () => {
        return props.data.sort((a, b) => a.date - b.date)
    }

    return (<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {drawXAxis()}
        {drawYAxis()}
        {lines}
        {points}
        {props.withGraphArea && drawGraphArea()}
    </svg>)
}