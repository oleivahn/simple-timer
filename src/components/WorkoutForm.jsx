import { useState, useRef, useEffect } from "react";
import "./WorkoutForm.css";
import { Input, Stack, TextField, Typography } from "@mui/material";

const componentName = ({ data, pageNumber }) => {
  console.log("📗 LOG [ data ]:", data);
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
    <div className="questions-container border-slate-100 border-2 pb-5">
      <div className="flex gap-5 justify-center pt-5">
        <h3>{`Round: ${round + 1}`}</h3>

        {/* Exercise Name */}
        {data[round] && (
          <div>
            <h3>{data[round].exercise}</h3>
          </div>
        )}
      </div>

      {/* {data.map((round, index) => {
        return (
          <div className="roundContainer">
            <div className="left-column ">
              <label
                htmlFor="reps"
                className="block text-sm font-medium leading-6 my-3"
              >
                {`${round.inputRef}`}
              </label>
            </div>
            <div>
              <div>
                <div className="mt-2">
                  <input
                    placeholder={round.sets}
                    id="reps"
                    name="reps"
                    type="text"
                    autoComplete="reps"
                    required
                    className="px-3 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })} */}

      {/* Exercise Form */}
      <div style={{ marginTop: "25px" }}>
        <div className="form-container">
          {data[round] && (
            <div className="roundContainer">
              <div className="left-column ">
                <label
                  htmlFor="reps"
                  className="block text-sm font-medium leading-6 my-3"
                >
                  Reps
                </label>
              </div>
              <div>
                <div>
                  <div className="mt-2">
                    <input
                      placeholder={data[round].sets}
                      id="reps"
                      name="reps"
                      type="text"
                      autoComplete="reps"
                      required
                      className="px-3 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {data[round] && (
            <div className="roundContainer">
              <div className="left-column ">
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium leading-6 my-3"
                >
                  Weight
                </label>
              </div>
              <div>
                <div>
                  <div className="mt-2">
                    <input
                      placeholder={data[round].weight}
                      id="weight"
                      name="weight"
                      type="text"
                      autoComplete="weight"
                      required
                      className="px-3 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {data[round] && (
            <div className="roundContainer">
              <div className="left-column ">
                <label
                  htmlFor="typeOfWeight"
                  className="block text-sm font-medium leading-6 my-3"
                >
                  Type of Weight
                </label>
              </div>
              <div>
                <div>
                  <div className="mt-2">
                    <input
                      placeholder={data[round].typeOfWeight}
                      id="typeOfWeight"
                      name="typeOfWeight"
                      type="text"
                      autoComplete="reps"
                      required
                      className="px-3 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {data[round] && (
            <div className="roundContainer">
              <div className="left-column ">
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium leading-6 my-3"
                >
                  Notes
                </label>
              </div>
              <div>
                <div>
                  <div className="mt-2">
                    <input
                      placeholder={data[round].notes}
                      id="notes"
                      name="notes"
                      type="text"
                      autoComplete="notes"
                      required
                      className="px-3 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
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
