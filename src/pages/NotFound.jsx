import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import svg_not from "../assets/images/not_found.svg";
const NotFound = () => {
  return (
    <div className="not_found_box">
      <img className="not-found" src={svg_not} alt="" />
      <h1> 404 Error.</h1>
      <p> We can't find the page you're looking for.</p>
      <Button
      as={Link}
      to="/"
        className="rounded-pill py-2 px-2 d-flex justify-content-center align-items-center"
        variant="three"
      >
        Back to home
      </Button>
    </div>
  );
};

export default NotFound;
