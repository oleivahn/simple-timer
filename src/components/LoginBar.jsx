import React, { useState, useEffect } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LoginBar() {
  const [loggedStatus, setLoggedStatus] = useState(true);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "20px" }}>
          <LoginButton />
          <LogoutButton />
        </div>
        <div style={{ padding: "20px" }}>
          <button onClick={() => setLoggedStatus(!loggedStatus)}>Logout</button>
          <p>Status: {loggedStatus ? "Logged in" : "Logged out..."}</p>
        </div>
      </div>
    </>
  );
}

export default LoginBar;
