import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    // try catch fetch to port 5000
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:5000/api")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Your content goes in here...</h1>
      <p>
        {data ? JSON.stringify(data) : "No server conected yet, check Home.jsx"}
      </p>
    </div>
  );
}

export default Home;
