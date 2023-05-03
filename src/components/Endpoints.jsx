import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Endpoints() {
  const [serverResponse, setServerResponse] = useState();

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
    <>
      <p>
        <Link to={`/`}>Home</Link>
      </p>
      <div>Endpoints page</div>
      <div style={{ marginTop: "25px" }}>
        <button onClick={finishNowHandler} value="finish-now">
          Post...
        </button>
        <p
          style={{ marginTop: "25px", color: "#195d85" }}
        >{`Server Response coming from Mongoose too: ${
          serverResponse
            ? `${serverResponse.title} and ${serverResponse.body}`
            : "Click the button to see the response"
        }`}</p>
      </div>
    </>
  );
}

export default Endpoints;
