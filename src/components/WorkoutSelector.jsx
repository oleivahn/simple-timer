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
        <Link to={`endpoints/`}>Endpoints and examples</Link>
      </h4>
      <h4>
        <Link to={`workout/3`}>Chest and Back</Link>
      </h4>
    </>
  );
}

export default WorkoutSelector;
