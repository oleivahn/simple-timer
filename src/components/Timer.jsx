import { useState, useRef, useEffect } from 'react'

const Timer = ({handlePageNumber, pageNumber, resetPageNumber}) => {
  const [seconds, setSeconds] = useState(3);
  const timerId = useRef();

  // Safeguard for the timer
  useEffect(() => {
    if (pageNumber === 3) {
      pauseTimer();
      return
    }

    if(seconds < 0) {
      resetTimer();
      handlePageNumber();
      startTimer();
    }
  },[seconds, pageNumber]);

  
  
  // TODO: Stop the timer after a set number of rounds
  // FIXME: This doesnt stop the timer when i need it to
  // useEffect(() => {
  //   if(pageNumber < 3) {
  //   } else {
  //     resetTimer();
  //   }
  // },[pageNumber]);

 
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
      setSeconds(3); 
      resetPageNumber();
    }
  }


  return (
    <div>
      <p>Timer Seconds: {seconds}</p>
      <p>Rounds: {pageNumber}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;