import { useState, useRef } from "react";
import StopWatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import Questions from "./components/Questions";
import "./App.css";

import data from "./data/chestAndBack.json";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [finished, setFinished] = useState(false);

  // Just the input
  const handleChange = (e) => {
    setRandomInput(e.target.value);
  };

  const handlePageNumber = () => {
    setPageNumber(pageNumber + 1);
  };

  const stepPageNumber = (direction) => {
    if (direction === "forward") {
      setPageNumber(pageNumber + 1);
      return;
    }
    if (direction === "back") {
      setPageNumber(pageNumber - 1);
      return;
    }
  };

  const resetPageNumber = () => {
    setPageNumber(0);
    setFinished(false);
  };

  const finishedWorkoutHandler = () => {
    setFinished(true);
  };

  return (
    <div className="App">
      <br />
      <Questions data={data} pageNumber={pageNumber} />
      <br />
      {/* <StopWatch />  */}
      <Timer
        handlePageNumber={handlePageNumber}
        pageNumber={pageNumber}
        stepPageNumber={stepPageNumber}
        resetPageNumber={resetPageNumber}
        finished={finishedWorkoutHandler}
        roundsToDo={data.length}
      />
      {finished && <p>CONGRATSSSS</p>}
      {finished && <p>{`Summary: ${JSON.stringify(data[0])}`}</p>}
    </div>
  );
}

export default App;
