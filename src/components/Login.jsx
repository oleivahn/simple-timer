import React, { useState, useEffect } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

function Login() {
  const [loggedStatus, setLoggedStatus] = useState(true);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="home"></div>
        <div className={`${styles.container}`} style={{ padding: "20px" }}>
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </>
  );
}

export default Login;
