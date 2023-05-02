import { useState, useEffect } from "react";
import axios from "axios";

import Timer from "./Timer";
import Questions from "./Questions";
import StopWatch from "./Stopwatch";

// import data from "../data/chestAndBack.json";

const WorkoutPage = () => {
  const [data, setData] = useState({});

  const [pageNumber, setPageNumber] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

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
      {data ? (
        <>
          <Questions data={data} pageNumber={pageNumber} />
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
          {finished && (
            <p>{`Summary: ${data ? JSON.stringify(data[0]) : null}`}</p>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WorkoutPage;
