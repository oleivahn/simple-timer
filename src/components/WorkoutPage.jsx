import { useState } from "react";

import Timer from "./Timer";
import Questions from "./Questions";
import StopWatch from "./Stopwatch";

import data from "../data/chestAndBack.json";

const WorkoutPage = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [finished, setFinished] = useState(false);

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
    <div>
      <Questions data={data} pageNumber={pageNumber} />
      <br />
      {/* <StopWatch /> */}
      <Timer
        handlePageNumber={handlePageNumber}
        pageNumber={pageNumber}
        stepPageNumber={stepPageNumber}
        resetPageNumber={resetPageNumber}
        finished={finishedWorkoutHandler}
        roundsToDo={data.length}
      />
      {finished && <p>CONGRATSSSS</p>}
      {finished && <p>{`Summary: ${data ? JSON.stringify(data[0]) : null}`}</p>}
    </div>
  );
};

export default WorkoutPage;
