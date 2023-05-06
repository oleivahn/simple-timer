import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";

function LoginButton() {
  // const handleLogin = async () => {
  //   const { loginWithRedirect } = useAuth0();
  //   console.log(loginWithRedirect);
  // };

  const { loginWithRedirect } = useAuth0();
  console.log(loginWithRedirect);

  return (
    <>
      <button id="login-btn" onClick={() => loginWithRedirect()}>
        Login
      </button>
      <p>Status: </p>
      {/* <p>Status: {loggedStatus}</p> */}
    </>
  );
}

export default LoginButton;
