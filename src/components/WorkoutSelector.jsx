import React from "react";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

function WorkoutSelector() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <>
      <div>WorkoutSelector</div>
      <h4 style={{ paddingBottom: "20px" }}>
        <Link to={`/`}>Home</Link>
      </h4>
      <h4>
        <Link to={`endpoints/`}>
          Endpoints and examples (Not protected route)
        </Link>
      </h4>
      {/* HIDES THESE ROUTES IF NOT LOGGED IN */}
      {isAuthenticated && (
        <>
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
        </>
      )}
    </>
  );
}

export default WorkoutSelector;
