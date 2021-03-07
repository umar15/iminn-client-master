import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const GameJoinSuccess = (props) => {
  let role = props.location.state.role;
  let teamName = props.location.state.teamName;
  return (
    <div>
      <div className="success-box">
        <div className="success-icon">
          <FcCheckmark />
        </div>
        <div className="h2 three">Congratulations!</div>
        <div>
          <p>
            You success to join as
            <span style={{ color: "#ff8252" }}> {role}</span> on
            <span style={{ color: "#ff8252" }}>
              {" "}
              {teamName}
              {". "}
            </span>
            Don't forget to play.
          </p>
        </div>

        <div>
          <Button
            as={Link}
            to="/"
            block
            variant="three"
            className="rounded-pill w-64 py-3 d-flex justify-content-center align-items-center text-capitalize"
          >
            <span>Back to Dashboard</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameJoinSuccess;
