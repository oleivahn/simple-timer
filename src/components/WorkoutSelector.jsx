import React from "react";
import { Link } from "react-router-dom";

function WorkoutSelector() {
  return (
    <>
      <div>WorkoutSelector</div>
      <h4>
        <Link to={`/`}>Home</Link>
      </h4>
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
    </>
  );
}

export default WorkoutSelector;
