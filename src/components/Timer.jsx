import { useState, useRef, useEffect } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(5);
  const timerId = useRef();

  // Safeguard for the timer
  useEffect(() => {
    if(seconds < 0) {
      resetTimer();
    }

    // Do something when the timer runs out
  });
 
  const startTimer = () => {
    if(!timerId.current) {
      timerId.current = setInterval(() => {
        setSeconds(prev => prev - 1); 
      }, 1000);  
    }
  }

  const pauseTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null; // Reset timer id so a new one can be created
  }

  const resetTimer = () => {
    pauseTimer();
    if (seconds) {
      setSeconds(5); 
    }
  }


  return (
    <div>
      <p>Timer Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;