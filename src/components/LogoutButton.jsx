import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";

function LogoutButton() {
  const { logout, user, isLoading } = useAuth0();

  return (
    <>
      {!isLoading && user && (
        <div className="flex">
          <p className="px-7 py-3 text-base font-medium  hover:text-primary">
            {user && user.name}
          </p>
          <button
            id="login-btn"
            className="px-7 py-3 text-base font-medium  hover:text-primary"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        </div>
      )}
      {/* <p>Status: {loggedStatus}</p> */}
    </>
  );
}

export default LogoutButton;
