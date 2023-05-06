import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, user, isLoading } = useAuth0();

  return (
    <>
      {!isLoading && !user && (
        <>
          <button id="login-btn" onClick={() => loginWithRedirect()}>
            Login
          </button>
          {/* <p>Status: </p> */}
        </>
      )}
      {/* <p>Status: {loggedStatus}</p> */}
    </>
  );
}

export default LoginButton;
