import { useState, useRef } from 'react'
import StopWatch from './components/Stopwatch';
import Timer from './components/Timer';
import './App.css'

function App() {
  const [randomInput, setRandomInput] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  // Just the input
  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  }

  const handlePageNumber = () => {
    setPageNumber(pageNumber + 1);
  }

  const resetPageNumber = () => {
    setPageNumber(0);
  }

  return (
    <div className="App">
      <input 
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>{randomInput}</p>

      <br />
      <p>page: {pageNumber}</p>
      <br />
      {/* <StopWatch />  */}
      <Timer 
        handlePageNumber={handlePageNumber} 
        pageNumber 
        resetPageNumber={resetPageNumber}
        />
    </div>
  )
}

export default App
