import { useState, useRef, useEffect } from "react";
import "./WorkoutForm.css";
import { Input, Stack, TextField, Typography } from "@mui/material";

const WorkoutForm = ({ data, pageNumber }) => {
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
    <div className="questions-container border-2 border-slate-100 pb-5">
      <div className="flex justify-center gap-5 pt-5">
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
                  className="my-3 block text-sm font-medium leading-6"
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
                      type="number"
                      step="1"
                      autoComplete="reps"
                      required
                      className="input block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {data[round] && (
            <div className="roundContainer">
              <div className="left-column">
                <label
                  htmlFor="weight"
                  className="my-3 block text-sm font-medium leading-6"
                >
                  Weight
                </label>
              </div>
              <div>
                <div>
                  <div className="mt-2">
                    <input
                      // style={{ backgroundColor: "red" }}
                      placeholder={data[round].weight}
                      id="weight"
                      name="weight"
                      type="number"
                      step="5"
                      autoComplete="weight"
                      required
                      className="input block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="my-3 block text-sm font-medium leading-6"
                >
                  Type of Weight
                </label>
              </div>
              <div>
                <div>
                  <div className="mt-2">
                    {/* <input
                      placeholder={data[round].typeOfWeight}
                      id="typeOfWeight"
                      name="typeOfWeight"
                      type="text"
                      autoComplete="reps"
                      required
                      className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    /> */}
                    <select className="select select-bordered w-full max-w-xs ring-1 ring-inset ring-gray-300">
                      <option selected>{data[round].typeOfWeight}</option>
                      <option>Dumbells</option>
                      <option>Yellow Bands</option>
                      <option>Blue Bands</option>
                    </select>
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
                  className="my-3 block text-sm font-medium leading-6"
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
                      className="input block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

export default WorkoutForm;
