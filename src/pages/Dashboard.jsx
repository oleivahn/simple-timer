import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import styles from "./Dashboard.module.css";
import ExerciseList from "../components/ExerciseList";

function Dashboard() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <div className={`${styles.container} ${styles.title} pt-16`}>
      {isAuthenticated && (
        <div className={styles.content}>
          Logged in!!!
          <h4>
            <Link to={`endpoints/`}>
              Endpoints and examples (Not protected route)
            </Link>
          </h4>
          <h4>
            <Link to={`workout/3`}>
              Select your dinamic workout (Protected routes)
            </Link>
          </h4>
          <h4>
            <Link to={`workout`}>
              Select your workout (Protected routes) --- USE THIS ONE
            </Link>
          </h4>
          <div>
            <ExerciseList />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
