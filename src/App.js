import React, { useState, useEffect } from 'react';
import './App.css';
import { LineChart } from './components/LineChart';

function App() {
  // TODO date in milliseconds
  // date is relative value to X axis
  const [randomFetchedDataA, setRandomFetchedDataA] = useState([
    { date: 60, value: 83.30 },
    { date: 1, value: 10 },
    { date: 85, value: 65.32 },
    { date: 97, value: 96 },
    { date: 20, value: 30 }
  ])

  const [randomFetchedDataB, setRandomFetchedDataB] = useState([
    { date: 30, value: 83.30 },
    { date: 66, value: 16 },
    { date: 15, value: 65.32 },
    { date: 97, value: 12 },
    { date: 20, value: 30 }
  ])

  const [referenceRanges, setReferenceRanges] = useState([19, 39])

  const randomizeSet = (chart) => {
    if (chart === 'a') {
      const data = getRandomValues()
      setRandomFetchedDataA(data)
    }

    if (chart === 'b') {
      const data = getRandomValues()
      setRandomFetchedDataB(data)
      setReferenceRanges([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
    }
  }

  const getRandomValues = () => {
    let values = []

    for (let i = 0; i < 10; i++) {
      values.push({ date: Math.floor(Math.random() * 100), value: Math.floor(Math.random() * 100) })
    }

    return values
  }

  return (
    <article className="App">

      <div className='chartWrapper'>
        <h4 className='title'>Line Chart</h4>
        <LineChart data={randomFetchedDataA} />

        <button onClick={() => { randomizeSet('a') }}>Randomize data</button>
      </div>


      <div className='chartWrapper'>
        <h4 className='title'>Line Chart with Target Range</h4>
        <LineChart data={randomFetchedDataB} withGraphArea referenceRanges={referenceRanges} />
        <button onClick={() => { randomizeSet('b') }}>Randomize data</button>
      </div>
    </article>
  );
}

export default App;
