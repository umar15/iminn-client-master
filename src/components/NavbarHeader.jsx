import React from "react";
import { Container } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Navbar, Button, Form, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.svg";
import { Icon2 } from "../assets/images/icon2";
import { Icon3 } from "../assets/images/icon3";
import { Icon4 } from "../assets/images/icon4";
import { Icon5 } from "../assets/images/icon5";
import { Icon6 } from "../assets/images/icon6";
import { Icon7 } from "../assets/images/icon7";

const popover2 = (
  <Popover id="key-2" className="rounded-xl  shadow-sm border-0">
    <div className="p-3">
      <div className="font-weight-bold">
        <span className="im-text-primary mr-1">2.</span>
        <span>Explore Any Games</span>
      </div>
      <p className="text-black-50 mt-4 small">
        You can search a game using a code that you get from the organizer. Or
        use the link that has been shared.
      </p>
    </div>
  </Popover>
);

export const NavbarHeader = ({ location }) => {
  let hideNavbarHeader =
    location.pathname === "/role-select" ||
    location.pathname === "/login" ||
    location.pathname === '/404' ||
    location.pathname === "/signup";
  return (
    <>
      {hideNavbarHeader ? (
        ""
      ) : (
        <Navbar bg="light">
          <Navbar.Brand className="d-none d-lg-flex" as={Link} to="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>

          <Container className="d-none d-lg-flex">
            <Form inline>
              <OverlayTrigger
                trigger="click"
                placement="auto"
                overlay={popover2}
              >
                <div className="bg-white py-1 px-3 rounded-pill ">
                  <span>
                    <AiOutlineSearch size={23} color="#FF8252" />
                  </span>
                  <FormControl
                    type="text"
                    placeholder="Find game code"
                    className="mr-sm-2 border-0 shadow-none"
                  />
                </div>
              </OverlayTrigger>
            </Form>

            <div className="ml-auto">
              <Button variant="primary-1" className="rounded-pill mr-4">
                <span>
                  <Icon2 />
                </span>
                <span>Legend</span>
              </Button>
              <Button variant="white" className="rounded-pill mr-4">
                <span>
                  <Icon3 />
                </span>
                <span className="ml-2">928</span>
              </Button>

              <Button variant="white" className="rounded-pill mr-4">
                <span>
                  <Icon4 />
                </span>
              </Button>
              <Button variant="white" className="rounded-pill mr-4">
                <span>
                  <Icon5 />
                </span>
              </Button>

              <Button variant="white" className="rounded-pill mr-4">
                <span>
                  <Icon6 />
                </span>
              </Button>
            </div>
          </Container>

          {/* = */}
          <div className="d-flex align-items-center justify-content-between w-100 d-lg-none">
            <div className="font-weight-bold mr-auto">Games</div>
            <div>
              <Button variant="primary-1" className="rounded-pill mr-2">
                <span>
                  <Icon2 />
                </span>
                <span>Legend</span>
              </Button>
              <Button variant="white" className="rounded-pill mr-2">
                <span>
                  <Icon3 />
                </span>
                <span className="ml-2">928</span>
              </Button>
              <Button variant="link" className="p-0">
                <Icon7 />
              </Button>
            </div>
          </div>
        </Navbar>
      )}
    </>
  );
};
