import React from 'react';
import './App.css';
import { LineChart } from './components/LineChart';

function App() {
  // TODO date in millseconds
  // date is relative value to X axis
  const fetchData = [
    { date: 60, value: 83.30 },
    { date: 0, value: 10 },
    { date: 85, value: 65.32 },
    { date: 100, value: 96 },
    { date: 20, value: 30 }
  ]

  return (
    <article className="App">
      <h4 className='title'>Line Chart</h4>
      <div className='chartWrapper'>
        <LineChart data={fetchData} />
      </div>
    </article>
  );
}

export default App;
