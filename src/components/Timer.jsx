import { useState, useRef, useEffect } from "react";

const Timer = ({
  handlePageNumber,
  pageNumber,
  resetPageNumber,
  stepPageNumber,
  finished,
  roundsToDo,
}) => {
  const [seconds, setSeconds] = useState(3);
  const timerId = useRef(null);

  // Safeguard for the timer
  useEffect(() => {
    if (pageNumber === roundsToDo) {
      pauseTimer(); // Stop the timer
      finished(true);
      return;
    }

    if (seconds < 0) {
      resetTimer();
      handlePageNumber();
      startTimer();
    }
  }, [seconds, pageNumber]);

  const startTimer = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null; // Reset timer id so a new one can be created
  };

  const resetTimer = () => {
    pauseTimer();
    if (seconds) {
      setSeconds(3);
      resetPageNumber();
    }
  };

  const stepBack = (e) => {
    console.log(e.target.value);
    if (pageNumber > 0) {
      timerId.current && pauseTimer();
      stepPageNumber(e.target.value);
      setSeconds(3);
      startTimer();
    }
  };

  const stepForward = (e) => {
    console.log(e.target.value);
    if (pageNumber < roundsToDo) {
      timerId.current && pauseTimer();
      stepPageNumber(e.target.value);
      setSeconds(3);
      startTimer();
    }
  };

  return (
    <div>
      <p>Timer Seconds: {seconds}</p>
      <p>Rounds: {pageNumber + 1}</p>
      <button value="back" onClick={stepBack}>
        Back
      </button>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
      <button value="forward" onClick={stepForward}>
        Next
      </button>
    </div>
  );
};

export default Timer;
