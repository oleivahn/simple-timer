import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, user, isLoading } = useAuth0();

  return (
    <>
      {!isLoading && !user && (
        <>
          <button
            id="login-btn"
            onClick={() =>
              loginWithRedirect({
                screen_hint: "dashboard",
                appState: {
                  returnTo: "/dashboard/",
                },
              })
            }
          >
            Login
          </button>
          <p>Status: {user}</p>
        </>
      )}
      {/* <p>Status: {loggedStatus}</p> */}
    </>
  );
}

export default LoginButton;
