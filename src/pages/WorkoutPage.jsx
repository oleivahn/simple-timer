import { useState, useEffect } from "react";
import axios from "axios";
import { DataSource, FetchWorkout } from "../data/DataSource";
import { useParams } from "react-router-dom";

import Timer from "../components/Timer";
import WorkoutForm from "../components/WorkoutForm";
import StopWatch from "../components/Stopwatch";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// import data from "../data/chestAndBack.json";

const WorkoutPage = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [data, setData] = useState({});
  const [serverResponse, setServerResponse] = useState();

  const [pageNumber, setPageNumber] = useState(0);
  const [finished, setFinished] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    console.log("📗 LOG [ id ]:", id);
    console.log(FetchWorkout("Hello MDFKR"));
  }, []);

  // Authorize user
  useEffect(() => {
    const getWorkoutData = async () => {
      const acessToken = await getAccessTokenSilently().then((res) => res);
      console.log("token in useEffect", acessToken);
      console.log("User", await user);

      const response = await fetch("http://localhost:5000/api", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acessToken}`,
          // scope: "read:current_user update:current_user_metadata",
        },
      });

      const responseData = await response.json();
      console.log("responseData", responseData);
      setData(responseData);
    };
    getWorkoutData();
  }, [getAccessTokenSilently]);

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

  // Axios POST Example
  const finishNowHandler = async (e) => {
    const testData = {
      title: "John Doe",
      body: 30,
    };
    console.log("Finish now...", e.target.value);

    axios
      .post("http://localhost:5000/workout", testData, {
        "Content-Type": "application/json",
      })
      .then(function (response) {
        console.log("🚀 ~ file: WorkoutPage.jsx:83 ~ response:", response);
        // handle success
        setServerResponse(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    setFinished(true);
  };

  return (
    <div>
      {data ? (
        <>
          <WorkoutForm data={data} pageNumber={pageNumber} />
          {/* <StopWatch /> */}
          <Timer
            handlePageNumber={handlePageNumber}
            pageNumber={pageNumber}
            stepPageNumber={stepPageNumber}
            resetPageNumber={resetPageNumber}
            finished={finishedWorkoutHandler}
            roundsToDo={data.length}
          />

          <div style={{ marginTop: "25px" }}>
            <button
              className="btn btn-secondary btn-wide"
              onClick={finishNowHandler}
              value="finish-now"
            >
              Finish now...
            </button>
          </div>

          {finished && <p>CONGRATSSSS</p>}
          {finished && (
            <>
              <p>{`Summary: ${
                data
                  ? JSON.stringify(
                      `${data[0].id} ${data[0].exercise} ... and all the rest`,
                    )
                  : null
              }`}</p>
              <p
                style={{ marginTop: "25px", color: "#195d85" }}
              >{`Server Response coming from Mongoose too: ${
                serverResponse
                  ? `${serverResponse.title} and ${serverResponse.body}`
                  : null
              }`}</p>
            </>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WorkoutPage;
