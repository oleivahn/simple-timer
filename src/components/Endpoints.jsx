import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import testData from "../data/chestAndBack.json";

function Endpoints() {
  const [serverResponse, setServerResponse] = useState();

  // Axios POST Example
  const getFromEndpointHandler = async (e) => {
    console.log("Getting data from endpoint...");

    axios
      .get("http://localhost:5000/startworkout")
      .then(function (response) {
        console.log("🚀 ~ file: WorkoutPage.jsx:83 ~ response:", response);
        // handle success
        setServerResponse(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const finishNowHandler = async (e) => {
    console.log(
      "🚀 ~ file: Endpoints.jsx:15 ~ finishNowHandler ~ testData:",
      testData
    );
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
  };

  return (
    <>
      <p>
        <Link to={`/`}>Home</Link>
      </p>
      <div>Endpoints page</div>
      <div style={{ marginTop: "25px" }}>
        <button onClick={getFromEndpointHandler} value="get-now">
          Get...
        </button>
      </div>
      <div style={{ marginTop: "25px" }}>
        <button onClick={finishNowHandler} value="finish-now">
          Post...
        </button>
        <p style={{ marginTop: "25px", color: "orange" }}>
          Server Response coming from Mongoose too:{" "}
        </p>
        <p style={{ marginTop: "10px", color: "green" }}>{`${
          serverResponse
            ? `${serverResponse.user} and ${serverResponse.workout}`
            : "Click the button to see the response"
        }`}</p>
      </div>
    </>
  );
}

export default Endpoints;
