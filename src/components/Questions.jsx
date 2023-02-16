import { useState, useEffect } from "react";
// import "./FILE_NAME.css";

const componentName = ({ data, pageNumber }) => {
  const [round, setRound] = useState(0);

  useEffect(() => {
    setRound(pageNumber);
  }, [pageNumber]);

  return (
    <div>
      <h3>{`Round: ${round + 1}`}</h3>
      {data[round] && <div>{`Exercise: ${data[round].exercise}`}</div>}
      {data[round] && <div>{`Number of Sets: ${data[round].sets}`}</div>}
      {data[round] && <div>{`Reps: ${data[round].reps}`}</div>}
      {data[round] && <div>{`Weight: ${data[round].weight}`}</div>}
      {data[round] && (
        <div>{`Type of Weight: ${data[round].typeOfWeight}`}</div>
      )}
      {data[round] && <div>{`Notes: ${data[round].notes}`}</div>}
    </div>
  );
};

export default componentName;
