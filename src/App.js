import React from 'react';
import './App.css';
import { LineChart } from './components/LineChart';

function App() {
  // TODO date in milliseconds
  // date is relative value to X axis
  const fetchData = [
    { date: 60, value: 83.30 },
    { date: 0, value: 10 },
    { date: 85, value: 65.32 },
    { date: 100, value: 96 },
    { date: 20, value: 30 }
  ]

  const referenceRanges = [42, 68]

  return (
    <article className="App">

      <div className='chartWrapper'>
        <h4 className='title'>Line Chart</h4>
        <LineChart data={fetchData} />
      </div>


      <div className='chartWrapper'>
        <h4 className='title'>Line Chart with Target Range</h4>
        <LineChart data={fetchData} withGraphArea referenceRanges={referenceRanges} />
      </div>
    </article>
  );
}

export default App;
