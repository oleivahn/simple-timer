import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, user, isLoading } = useAuth0();

  return (
    <>
      {!isLoading && !user && (
        <div className="flex">
          <button
            id="login-btn"
            className="px-7 py-3 text-base font-medium  hover:text-primary"
            onClick={() =>
              loginWithRedirect({
                screen_hint: "dashboard",
                appState: {
                  returnTo: "/dashboard/",
                },
              })
            }
          >
            Login / Sign Up
          </button>
          {/* <p>Status: {user}</p> */}
        </div>
      )}
      {/* <p>Status: {loggedStatus}</p> */}
    </>
  );
}

export default LoginButton;
