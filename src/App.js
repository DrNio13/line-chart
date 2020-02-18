import React from 'react';
import './App.css';
import { LineChart } from './components/LineChart';

function App() {
  // TODO date in milliseconds
  // date is relative value to X axis
  const randomFetchedDataA = [
    { date: 60, value: 83.30 },
    { date: 1, value: 10 },
    { date: 85, value: 65.32 },
    { date: 97, value: 96 },
    { date: 20, value: 30 }
  ]

  const randomFetchedDataB = [
    { date: 30, value: 53.30 },
    { date: 5, value: 35.65 },
    { date: 55, value: 65.32 },
    { date: 92, value: 21 },
    { date: 26, value: 35 }
  ]

  const referenceRanges = [19, 39]

  return (
    <article className="App">

      <div className='chartWrapper'>
        <h4 className='title'>Line Chart</h4>
        <LineChart data={randomFetchedDataA} />
      </div>


      <div className='chartWrapper'>
        <h4 className='title'>Line Chart with Target Range</h4>
        <LineChart data={randomFetchedDataB} withGraphArea referenceRanges={referenceRanges} />
      </div>
    </article>
  );
}

export default App;
