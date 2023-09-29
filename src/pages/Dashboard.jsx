import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import styles from "./Dashboard.module.css";
import ExerciseList from "../components/ExerciseList";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <div className={`${styles.container} ${styles.title} pt-16`}>
      {isAuthenticated && (
        <div className={styles.content}>
          <DashboardContent />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
