import React, { useEffect, useState } from 'react'

export const LineChart = (props) => {
    const axisColor = 'lightgrey'
    const [lines, setLines] = useState(null)
    const [points, setPoints] = useState(null)

    // TODO add text x axis
    const drawXAxis = () => {
        return <line x1="0" x2="100" y1="100" y2="100" stroke={axisColor} />
    }

    // TODO add text y axis
    const drawYAxis = () => {
        return <line x1="0" x2="0" y1='0' y2='100' stroke={axisColor} />
    }

    const drawLine = (x1, x2, y1, y2, key) => {
        return <line x1={x1} x2={x2} y1={y1} y2={y2} stroke={'cadetblue'} key={key} strokeWidth='0.2' />
    }

    // TODO hover and show popover
    const drawCircle = (cx, cy) => {
        return <circle cx={cx} cy={cy} r="1" />
    }

    useEffect(() => {
        const sortedData = props.data.sort((a, b) => a.date - b.date)

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
    }, [])

    useEffect(() => {
        const sortedData = props.data.sort((a, b) => a.date - b.date)

        const points = sortedData.map((point, index, array) => {
            return drawCircle(
                point.date,
                100 - point.value)
        })
        setPoints(points)
    }, [])

    return (<svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
        {drawXAxis()}
        {drawYAxis()}
        {lines}
        {points}
    </svg>)
}