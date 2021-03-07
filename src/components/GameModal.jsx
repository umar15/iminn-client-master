import React from "react";
import image_1 from "../assets/images/image-1.svg";
import { BiLocationPlus, BiBookBookmark, BiDollar } from "react-icons/bi";
import {
 
  Button,
 
  Modal,
} from "react-bootstrap";
import { AiFillHeart, AiOutlinePlus } from "react-icons/ai";

import { Link } from "react-router-dom";

const GameModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your game is just start
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image_1} alt="Logo" />
          <div>
            <p>Side A vs Side B</p>
            <p>
              <BiLocationPlus size={10} /> <span> location name </span>
            </p>
            <p>
              <BiBookBookmark size={10} /> <span> location name </span>
            </p>
            <p>
              <BiDollar size={10} /> <span> location name </span>
            </p>
            <p>As a stickers Player Side A</p>
            <Button
              as={Link}
              to="/"
              block
              variant="three"
              className="rounded-pill py-3 d-flex justify-content-center align-items-center text-capitalize"
            >
              <AiOutlinePlus size={20} className="mr-2" />
              <span>Let's play now!</span>
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default GameModal;
