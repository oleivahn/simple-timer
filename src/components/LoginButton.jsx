import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";

function LoginButton() {
  // const handleLogin = async () => {
  //   const { loginWithRedirect } = useAuth0();
  //   console.log(loginWithRedirect);
  // };

  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  console.log(
    "🚀 ~ file: LoginButton.jsx:13 ~ LoginButton ~ isLoading:",
    isLoading
  );
  console.log("🚀 ~ file: LoginButton.jsx:13 ~ LoginButton ~ user:", user);
  console.log("🚀 ~ file: LoginButton.jsx:13 ~ LoginButton ~ logout:", logout);
  console.log(
    "🚀 ~ file: LoginButton.jsx:13 ~ LoginButton ~ loginWithRedirect:",
    loginWithRedirect
  );
  // console.log(loginWithRedirect);

  return (
    <>
      {!isLoading && !user && (
        <>
          <button id="login-btn" onClick={() => loginWithRedirect()}>
            Login
          </button>
          <p>Status: </p>
        </>
      )}
      {/* <p>Status: {loggedStatus}</p> */}
    </>
  );
}

export default LoginButton;
