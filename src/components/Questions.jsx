import { useState, useEffect, useRef } from "react";
import "./Questions.css";

const componentName = ({ data, pageNumber }) => {
  // FIXME: This is where the console error is coming from
  console.log("Check here for the index 0 console error");
  // const [round, setRound] = useState(0);
  const [round, setRound] = useState();
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
    <div className="questions-container">
      <h3>{`Round: ${round + 1}`}</h3>

      {/* Exercise Name */}
      {data[round] && (
        <div>
          <h3>{data[round].exercise}</h3>
        </div>
      )}

      {/* Exercise Form */}
      <div style={{ marginTop: "25px" }}>
        <div className="form-container">
          {data[round] && (
            <div className="roundContainer">
              <div className="left-column">
                <span>Reps </span>
              </div>
              <div>
                <input
                  ref={repsRef}
                  className="repsInput"
                  placeholder={data[round].sets}
                ></input>
              </div>
            </div>
          )}
          {data[round] && (
            <div className="roundContainer">
              <div className="left-column">
                <span>Weight </span>
              </div>
              <div>
                <input placeholder={data[round].weight}></input>
              </div>
            </div>
          )}
          {data[round] && (
            <div className="roundContainer">
              <div className="left-column">
                <span>Type of Weight </span>
              </div>
              <div>
                <input placeholder={data[round].typeOfWeight}></input>
              </div>
            </div>
          )}
          {data[round] && (
            <div className="roundContainer">
              <div className="left-column">
                <span>Notes </span>
              </div>
              <div>
                <input placeholder={data[round].notes} />
              </div>
            </div>
          )}
        </div>
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
