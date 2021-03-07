import React, { useEffect, useLayoutEffect, useState } from "react";
import { Col, Row, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";

// icons
import { AiFillHeart, AiOutlinePlus } from "react-icons/ai";
import { BiBookOpen, BiTimeFive } from "react-icons/bi";
import { Icon1 } from "../assets/images/icon1";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import Avatar from "react-avatar";
// images
import imageOne from "../assets/images/image-1.svg";
import imageTwo from "../assets/images/image-2.svg";
import face1 from "../assets/images/face1.svg";
import face2 from "../assets/images/face2.svg";
import face3 from "../assets/images/face3.svg";
import face4 from "../assets/images/face4.svg";
import face5 from "../assets/images/face5.svg";
import gameService from "../services/game.service";

const popover1 = (
  <Popover id="key-1" className="rounded-xl  shadow-sm border-0">
    <div className="py-3 px-3 px-md-3">
      <div className="font-weight-bold">
        <span className="im-text-primary mr-1">1.</span>
        <span>Let’s Setting Up Your Profile</span>
      </div>
      <p className="text-black-50 mt-4 small">
        Let’s setting up your profile by uploading a profile picture, and then
        you are ready to go!
      </p>
    </div>
  </Popover>
);

const popover3 = (
  <Popover id="key-3" className="rounded-xl  shadow-sm border-0">
    <div className="p-3">
      <div className="font-weight-bold">
        <span className="im-text-primary mr-1">3.</span>
        <span>Create a Public Game!</span>
      </div>
      <p className="text-black-50 mt-4 small">
        Yes, you can create and publish a public game. Share it to your friends
        and make it awesome!
      </p>
    </div>
  </Popover>
);

const popover4 = (
  <Popover id="key-4" className="rounded-xl  shadow-sm border-0">
    <div className="p-3">
      <div className="font-weight-bold">
        <span className="im-text-primary mr-1">4.</span>
        <span>Easy Access Notification</span>
      </div>
      <p className="text-black-50 mt-4 small">
        The notification tab is easy access and you can see all the new
        notifications easily here.
      </p>
    </div>
  </Popover>
);

const Gamebox = (props) => {
  return (
    <section className="rounded-xl bg-white p-4 mb-4">
      <div className="row mx-0 justify-content-center align-items-center">
        <span
          className="mr-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm"
          style={{
            width: 110,
            height: 100,
            backgroundColor: "#FFF3EE",
          }}
        >
          <img width="70%" height="70%" src={imageOne} alt="" />
        </span>
        <span>
          <h6 className="font-weight-bold mb-2 mt-2 mt-sm-0">
            <span className="text-uppercase">{props.teamName1}</span>
            <span className="mx-1">vs</span>
            <span className="text-uppercase">{props.teamName2}</span>
          </h6>
          <div className="small text-black-50">
            {props.time}, {props.location}
          </div>

          <div className="d-flex mt-3">
            <span>
              <Avatar
                color={Avatar.getRandomColor("sitebase", [
                  "red",
                  "pink",
                  "orange",
                  "aqua",
                  "gray",
                  "green",
                  "blue",
                  "teal",
                ])}
                size="25"
                round={true}
               
                name="SG"
              />
            </span>
            
            <span
              className="ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end"
              style={{ width: 30, height: 30 }}
            >
             <Avatar
                color={Avatar.getRandomColor("sitebase", [
                  "pink",
                  "orange",
                  "aqua",
                  "gray",
                  "green",
                  "blue",
                  "teal",
                ])}
                size="25"
                round={true}
               
                name="FO"
              />
            </span>
            <span
              className="ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end"
              style={{ width: 30, height: 30 }}
            >
              <Avatar
                color={Avatar.getRandomColor("sitebase", [
                  "pink",
                  "orange",
                  "aqua",
                  "green",
                  "blue",
                  "teal",
                ])}
                size="25"
                round={true}
               
                name="AL"
              />
            </span>
          
          </div>
        </span>
        <span className="mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3">
          <Button
            as={Link}
            to={{
              pathname: `/join-game/${props.id}`,
              data: {
                ...props,
              },
              query: { gameId: props.id },
            }}
            block
            variant="three"
            className="rounded-pill py-3 d-flex justify-content-center align-items-center"
          >
            Join Now
          </Button>
        </span>
      </div>
    </section>
  );
};

const getFromLocal = () => {
  let localUser = localStorage.getItem("user");
  if (localUser) {
    let user1 = JSON.parse(localUser);
    return user1;
  }
  return false;
};

export const Dashboard = (props) => {
  const [games, setGames] = useState([]);
  const [state, setState] = useState(true);
  const [user, setUser] = useState(getFromLocal());

  useLayoutEffect(() => {
    return gameService
      .getAll()
      .orderBy("gameDate", "desc")
      .onSnapshot(onDataChange);
  }, []);

  const onDataChange = (items) => {
    let games_list = [];
    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      games_list.push({
        id: id,
        teamName1: data.teamName1,
        teamName2: data.teamName2,
        price: data.price,
        time: data.time,
        location: data.location,
        ...item,
      });
    });
    setGames(games_list);
  };

  return (
    <main className="container mb-5 pb-5">
      <div className="px-3">
        <h4 className="font-weight-bold text-dark mb-4">Games</h4>
        <Row>
          <Col>
            {games.map((item) => {
              return <Gamebox {...item} />;
            })}

            <main>
              {/* <div className="mb-4 d-flex">
                <BiBookOpen color="#ff8252" size={20} className="mr-2" />
                <span className="font-weight-bold text-capitalize">
                  Games Nearby
                </span>
              </div> */}
              {/* <section className="rounded-xl bg-white p-4 mb-4 position-relative">
                <div className="text-right mb-2 mb-md-0">
                  <Button variant="link" className="p-0">
                    <AiFillHeart color="#ff8252" size={26} />
                  </Button>
                </div>
                <div className="row mx-0 justify-content-center align-items-center">
                  <span
                    className="mr-sm-2 mr-md-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm"
                    style={{
                      width: 220,
                      height: 180,
                      backgroundColor: "#FFF3EE",
                    }}
                  >
                    <img
                      className="rounded-xl object-cover"
                      width="100%"
                      height="100%"
                      src={imageTwo}
                      alt=""
                    />
                  </span>
                  <div className="text-center text-sm-left mt-3 mt-md-0">
                    <h5 className="font-weight-bold mb-2">
                      <span className="text-uppercase">FCL</span>
                      <span className="mx-1">vs</span>
                      <span className="text-uppercase">FCV</span>
                    </h5>
                    <div className="small text-black-50 mb-2">
                      Location: London
                    </div>
                    <div className="small text-black-50 mb-2">
                      Ground: Middlesex
                    </div>
                    <div className="d-flex mt-3">
                      <span className="mr-4 d-flex align-items-center">
                        <BiTimeFive color="#ff8252" size={18} />
                        <span className="text-black-50 ml-2">4:00 pm</span>
                      </span>

                      <span className="d-flex align-items-center">
                        <FiUsers color="#ff8252" size={18} />
                        <span className="text-black-50 ml-2">5 Players</span>
                      </span>
                    </div>
                  </div>
                  <span className="mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3">
                    <Button
                      block
                      variant="three"
                      className="rounded-pill py-3 d-flex justify-content-center align-items-center text-capitalize"
                    >
                      More info
                    </Button>
                  </span>
                </div>
              </section>

              <section className="rounded-xl bg-white p-4 mb-4 position-relative">
                <div className="text-right mb-2 mb-md-0">
                  <Button variant="link" className="p-0">
                    <AiFillHeart color="#ff8252" size={26} />
                  </Button>
                </div>
                <div className="row mx-0 justify-content-center align-items-center">
                  <span
                    className="mr-sm-2 mr-md-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm"
                    style={{
                      width: 220,
                      height: 180,
                      backgroundColor: "#FFF3EE",
                    }}
                  >
                    <img
                      className="rounded-xl object-cover"
                      width="100%"
                      height="100%"
                      src={imageTwo}
                      alt=""
                    />
                  </span>
                  <div className="text-center text-sm-left mt-3 mt-md-0">
                    <h5 className="font-weight-bold mb-2">
                      <span className="text-uppercase">FCL</span>
                      <span className="mx-1">vs</span>
                      <span className="text-uppercase">FCV</span>
                    </h5>
                    <div className="small text-black-50 mb-2">
                      Location: London
                    </div>
                    <div className="small text-black-50 mb-2">
                      Ground: Middlesex
                    </div>
                    <div className="d-flex mt-3">
                      <span className="mr-4 d-flex align-items-center">
                        <BiTimeFive color="#ff8252" size={18} />
                        <span className="text-black-50 ml-2">4:00 pm</span>
                      </span>

                      <span className="d-flex align-items-center">
                        <FiUsers color="#ff8252" size={18} />
                        <span className="text-black-50 ml-2">5 Players</span>
                      </span>
                    </div>
                  </div>
                  <span className="mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3">
                    <Button
                      block
                      variant="three"
                      className="rounded-pill py-3 d-flex justify-content-center align-items-center text-capitalize"
                    >
                      More info
                    </Button>
                  </span>
                </div>
              </section>
           */}
            </main>
          </Col>
          <Col lg={4}>
            <div className="rounded-xl bg-white p-4 mb-4">
              <div className="mb-4 d-flex align-items-center">
                <Icon1 className="mr-2" />
                <span className="font-weight-bold text-capitalize">
                  Create Game
                </span>
              </div>
              <p className="text-black-50 mb-4 small">
                Create new game so you can invite all of your friends to the
                game and make it awesome!
              </p>

              <div>
                <OverlayTrigger
                  show={!user.is_visited}
                  placement="auto"
                  overlay={!user.is_visited ? popover3 : ""}
                >
                  <Button
                    as={Link}
                    to="/create-game"
                    block
                    variant="three"
                    className="rounded-pill py-3 d-flex justify-content-center align-items-center text-capitalize"
                  >
                    <AiOutlinePlus size={20} className="mr-2" />
                    <span>Create New Game</span>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>

            <div className="rounded-xl bg-white p-4 mb-4">
              <div className="mb-4 d-flex align-items-center">
                <IoIosNotificationsOutline
                  color="#ff8252"
                  size={20}
                  className="mr-2"
                />
                <span className="font-weight-bold text-capitalize">
                  Notifications
                </span>
              </div>

              <OverlayTrigger
                show={!user.is_visited}
                placement="auto"
                overlay={!user.is_visited ? popover4 : ""}
              >
                <div
                  className="small d-flex align-items-baseline"
                  style={{ cursor: "pointer" }}
                  onClick={() => setState(!state)}
                >
                  <span
                    className="rounded-circle mr-2"
                    style={{
                      padding: 3,
                      backgroundColor: "#ff8252",
                    }}
                  ></span>
                  <div>
                    <span>
                      Welcome to Immin, start exploring some matches now!
                    </span>
                    <Link className="im-text-primary ml-1">Explore Match</Link>
                  </div>
                </div>
              </OverlayTrigger>

              {state ? (
                <div>
                  <p className="text-black-50 mt-4 pt-4 border-top small">
                    BVG vs HGC match has been reopened! Join now
                    <Link className="im-text-primary ml-1">Join Now</Link>
                  </p>
                </div>
              ) : null}

              <p className="text-black-50 mt-4 pt-4 border-top small">
                Here is the notification center, all of your notification will
                appear here.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* === */}
      <OverlayTrigger
        show={false}
        placement="auto"
        overlay={!user.is_visited ? popover3 : ""}
      >
        <button
          type="button"
          className="btn btn-two rounded-pill d-flex align-items-center justify-content-center p-3 fixed-bottom d-lg-none"
          style={{ bottom: 100, left: "unset", right: 20 }}
        >
          <AiOutlinePlus size={20} />
        </button>
      </OverlayTrigger>
    </main>
  );
};
