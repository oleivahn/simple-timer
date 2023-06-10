import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import styles from "./Home.module.css";

function Home() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <>
      <div className={styles.container}>
        <h4 style={{ paddingBottom: "20px" }}>
          <Typography variant="h4" gutterBottom>
            <Link to={`/`}>Home</Link>
          </Typography>
        </h4>
        <Login />
      </div>
      <div id="detail">
        <Outlet />
      </div>
      {/* HIDES THESE ROUTES IF NOT LOGGED IN */}
      {/* {isAuthenticated && (
        <>
          <Typography variant="body1" gutterBottom>
            Welcome to your personal workout tracker. Please login to continue.
          </Typography>
          <h4>
            <Typography variant="body1" gutterBottom>
              <Link to={`endpoints/`}>
                Endpoints and examples (Not protected route)
              </Link>
            </Typography>
          </h4>
          <h4>
            <Typography variant="body1" gutterBottom>
              <Link to={`workout/3`}>
                Select your dinamic workout (Protected routes)
              </Link>
            </Typography>
          </h4>
          <h4>
            <Typography variant="body1" gutterBottom>
              <Link to={`workout`}>
                Select your workout (Protected routes) --- USE THIS ONE
              </Link>
            </Typography>
          </h4>
        </>
      )} */}
    </>
  );
}

export default Home;
