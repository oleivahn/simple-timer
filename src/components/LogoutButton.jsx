import React from "react";
import axios from "axios";

function LogoutButton() {
  const handleLogout = async () => {
    // const domain = "omar-tenant.us.auth0.com";
    // const clientId = "Ez2S2FHTHZ8jH1GARW9SMowqPMakYsHA";
    // const returnTo = "http://localhost:5173/";

    // const response = await fetch(
    //   `https://${domain}/logout?client_id=${clientId}&returnTo=${returnTo}`,
    //   {
    //     redirect: "manual",
    //   }
    // );

    // reroute to auth0 login page
    // window.location.replace(response.url);
    console.log("Something");
  };
  // const handleLogout = async () => {
  // axios
  //     .get("http://localhost:5000/", {
  //       "Content-Type": "application/json",
  //     })
  //     .then(function (response) {
  //       // handle success
  //       setLoggedStatus(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <button id="logout-btn" onClick={handleLogout}>
        Login
      </button>
      <p>Status: </p>
      {/* <p>Status: {loggedStatus}</p> */}
    </>
  );
}

export default LogoutButton;
