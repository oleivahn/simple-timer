import { useState, useRef, useEffect } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef();

  // Ox: This would be a timer that runs as soon as the component mounts and stops when the component unmounts.
  // useEffect(() => {
  //   timerId.current = setInterval(() => {
  //     setSeconds(seconds => seconds + 1);
  //   }, 1000);
  //   return () => clearInterval(timerId.current);
  // }, []);

  // Stopwatch timer
  const startTimer = () => {
    if (!timerId.current) {
      // if prevents a double trigger
      timerId.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    pauseTimer();
    if (seconds) {
      setSeconds(0);
    }
  };

  return (
    <div>
      <p>Stopwatch Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default StopWatch;
