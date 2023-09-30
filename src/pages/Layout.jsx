import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";

function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar />
      <div id="detail">
        {/* INFO: Feeds the routes from react-router-dom */}
        <Outlet />
      </div>
      {/* HIDES THESE ROUTES IF NOT LOGGED IN */}
      {!isAuthenticated && (
        <>
          <div className="pt-16">
            Welcome to your personal workout tracker. Please login to continue.
          </div>
        </>
      )}
    </>
  );
}

export default Home;
