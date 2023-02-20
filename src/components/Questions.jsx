import { useState, useEffect, useRef } from "react";
// import "./FILE_NAME.css";

const componentName = ({ data, pageNumber }) => {
  const [round, setRound] = useState(0);
  const repsRef = useRef();

  useEffect(() => {
    setRound(pageNumber);
    // TODO: Fix the refs
    // Use forwardRef to pass the ref down to the child component
    // https://www.youtube.com/watch?v=ScT4ElKd6eo&ab_channel=techsith

    // repsRef.current.focus();

    // return () => {
    //   repsRef.current.value = null;
    // };
  }, [pageNumber]);

  return (
    <div>
      <h3>{`Round: ${round + 1}`}</h3>
      {data[round] && (
        <div>
          <h3>{data[round].exercise}</h3>
        </div>
      )}
      <div>
        {data[round] && (
          <div className="roundContainer">
            <span>Reps </span>
            <input
              ref={repsRef}
              className="repsInput"
              placeholder={data[round].sets}
            ></input>
          </div>
        )}
        {data[round] && (
          <div className="roundContainer">
            <span>Weight </span>
            <input placeholder={data[round].weight}></input>
          </div>
        )}
        {data[round] && (
          <div className="roundContainer">
            <span>Type of Weight </span>
            <input placeholder={data[round].typeOfWeight}></input>
          </div>
        )}
        {data[round] && (
          <div className="roundContainer">
            <span>Notes </span>
            <input placeholder={data[round].notes} />
          </div>
        )}
        {/* {data[round] && <div>{`Reps: ${data[round].reps}`}</div>}
      {data[round] && <div>{`Weight: ${data[round].weight}`}</div>}
      {data[round] && (
        <div>{`Type of Weight: ${data[round].typeOfWeight}`}</div>
      )}
      {data[round] && <div>{`Notes: ${data[round].notes}`}</div>} */}
      </div>
    </div>
  );
};

export default componentName;
