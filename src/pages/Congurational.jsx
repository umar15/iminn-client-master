import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { InviteTable } from "../components/tables/InviteTable";
const Congurational = (props) => {
   let code = props.location.state.code
  // let code ="12kl"
  return (
    <div className="success-box">
      <div className="success-icon">
        <FcCheckmark />
      </div>
      <div className="h2 three">Congratulations!</div>
      <div>
        <p>
          Your game has been created. Your game code <span style={{color:"#ff8252"}}> {code}</span> ,Let's invite your friends to play together.
        </p>
      </div>
      <div>
        <InviteTable/>
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
  );
};

export default Congurational;
