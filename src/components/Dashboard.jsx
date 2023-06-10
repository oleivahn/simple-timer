import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import styles from "./Dashboard.module.css";

function Dashboard() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <div className={`${styles.container} ${styles.title}`}>
      {isAuthenticated && (
        <div className={styles.content}>
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
        </div>
      )}
    </div>
  );
}

export default Dashboard;
