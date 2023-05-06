import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";

function LogoutButton() {
  const { logout, user, isLoading } = useAuth0();

  return (
    <>
      {!isLoading && user && (
        <div>
          <button id="login-btn" onClick={() => logout()}>
            Logout
          </button>
          {/* <p>Status: </p> */}
        </div>
      )}
      {/* <p>Status: {loggedStatus}</p> */}
    </>
  );
}

export default LogoutButton;
