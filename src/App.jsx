import { useState, useRef } from 'react'
import StopWatch from './components/Stopwatch';
import Timer from './components/Timer';
import './App.css'

function App() {
  const [randomInput, setRandomInput] = useState('');
  const [seconds, setSeconds] = useState(0);

  const renders = useRef(0);
  const timerId = useRef();

  // Just the input
  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  }

  // TIMER
  // const startTimer = () => {
  //   timerId.current = setInterval(() => {
  //     renders.current++;
  //     setSeconds(prev => prev + 1); 
  //   }, 1000);
  // }

  // const pauseTimer = () => {
  //   clearInterval(timerId.current);
  //   timerId.current = 0;
  // }

  // const resetTimer = () => {
  //   pauseTimer();
  //   if (seconds) {
  //     renders.current++;
  //     setSeconds(0); 
  //   }
  // }

  return (
    <div className="App">
      <input 
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>{randomInput}</p>
{/* 
      <p>Renders: {renders.current}</p>
      <br /> <br />

      <p>Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button> */}
      <br /> <br />
      <StopWatch /> 
      <Timer />
    </div>
  )
}

export default App
