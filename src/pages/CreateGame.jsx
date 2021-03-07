import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Calendar from "react-calendar";

// icons
import { Icon1 } from "../assets/images/icon1";
import ArrowBack from "../assets/images/arrow-back.svg";
import gameService from "../services/game.service";
import { FiUser } from "react-icons/fi";
var randomstring = require("randomstring");
const LocationArr = [
  { name: "Hujan angin Sport Centre, London" },
  { name: "The St. Bonitaria Sport Centre, London" },
  { name: "Wonderful Happiness Sport Centre, London" },
  { name: "Makan Ikan Asin Pake Sambel Sport Centre, London" },
  { name: "Another Boccia Sport Centre, London" },
  { name: "Wonderful Sentra 2 Sport Centre, London" },
];

const getFromLocal = () => {
  let localUser = localStorage.getItem("user");
  if (localUser) {
    let user1 = JSON.parse(localUser);
    return user1;
  }
  return false;
};
export const CreateGame = () => {
  var history = useHistory();
  const [gameDate, onChangeDate] = useState(new Date());
  const [price, setPrice] = useState(1);
  const [type, setType] = useState("Organizer");
  const [pitch, setPitch] = useState("7");
  const teamName1 = useState("Team A");
  const teamName2 = useState("Team B");
  const [location, setLocation] = useState();
  const [time, setTime] = useState();
  const [audence, setAudence] = useState("public");
  const [currentActive, setActive] = useState("info");
  const [errors, setErrors] = useState([]);
  const user = useState(getFromLocal());

  const validateInfo = () => {
    var errors = [];
    if (type === "" || !type) {
      errors.push("type");
    }
    if (pitch === "" || !pitch) {
      errors.push("pitch");
    }
    if (teamName1 === "" || !teamName1) {
      errors.push("teamName1");
    }
    if (teamName2 === "" || !teamName2) {
      errors.push("teamName2");
    }
    setErrors(errors);
    if (errors.length > 0) return false;
    return true;
  };

  const validateDetail = () => {
    var errors = [];
    if (location === "" || !location) {
      errors.push("location");
    }
    if (gameDate === "" || !gameDate) {
      errors.push("gameDate");
    }
    if (time === "" || !time) {
      errors.push("time");
    }
    if (price === "" || !price) {
      errors.push("price");
    }
    setErrors(errors);
    if (errors.length > 0) return false;
    return true;
  };
  const onContinue = (to) => {
    setErrors([]);
    if (to === "detail") {
      if (!validateInfo()) return false;
    } else if (to === "publish") {
      if (!validateDetail()) return false;
    }

    setActive(to);
  };

  const hasError = (key) => {
    return errors.indexOf(key) !== -1;
  };
  const saveGame = () => {
    let code = randomstring.generate({
      length: 4,
      charset: "HRLMNOPQUERYJHGFAEQRZXCMNB123456789",
    });

    let data = {
      code,
      pitch,
      time,
      gameDate,
      location,
      audience: audence,
      teamName1,
      teamName2,
      type,
      price,
      team1: type === "Player" ? [{user}] : undefined,
    };

    gameService.create(data).then((data) => {
      // console.log("Created new item successfully!", data);
      history.push("/game-success", { code });
    });
    
  };
  return (
    <main className="container-fluid mb-5 pb-5 px-0 px-md-3">
      <form>
        <div className="px-3 px-md-3">
          <div className="mb-2">
            <Link to="/" className="p-0">
              <img height={40} width={40} src={ArrowBack} alt="Back" />
            </Link>
          </div>
          <div className="d-flex">
            <span>
              <Icon1 className="mr-2" />
            </span>
            <h4 className="font-weight-bold text-dark mb-4 ">Create Game</h4>
          </div>
          <Row className="d-flex justify-content-end mr-8 ">
            <Col className="info-progess-desktop text-black-50 pt-5 " lg={4}>
              <h6
                className={`my-4 py-4 ${
                  currentActive === "info" ? "active-game-create" : ""
                }`}
              >
                Game Information
              </h6>
              <h6
                className={`my-4 py-4 ${
                  currentActive === "detail" ? "active-game-create" : ""
                }`}
              >
                Game Details
              </h6>
              <h6
                className={`my-4 py-4 ${
                  currentActive === "publish" ? "active-game-create" : ""
                }`}
              >
                Save and Publish
              </h6>
            </Col>
            <Col className="info-progess-mobile text-black-50 pt-2 " lg={4}>
              <h6
                className={` px-3 ${
                  currentActive === "info" ? "active-game-create" : ""
                }`}
              >
                Information
              </h6>
              <h6
                className={` px-4 ${
                  currentActive === "detail" ? "active-game-create" : ""
                }`}
              >
                Details
              </h6>
              <h6
                className={` px-4 ${
                  currentActive === "publish" ? "active-game-create" : ""
                }`}
              >
                Publish
              </h6>
            </Col>
            {currentActive === "info" && (
              <Col
                className="rounded-xl section-container  bg-white  border text-black-50 shadow-md"
                lg={8}
              >
                <section className="section-box">
                  <div className="section-title">You are</div>
                  <div className="d-flex section-content">
                    <div className="mr-4">
                      <label class="checkbox-container">
                        <span>
                          <FiUser />
                          <span className="mx-2">Organizer </span>
                        </span>
                        <input
                          type="radio"
                          name="radio"
                          value={type}
                          checked={"Organizer" === type}
                          onChange={(e) => setType("Organizer")}
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>

                    <div>
                      <label class="checkbox-container">
                        <span>
                          <FiUser />
                          <span className="mx-2">Player </span>
                        </span>
                        <input
                          type="radio"
                          name="radio"
                          value={type}
                          checked={"Player" === type}
                          onChange={(e) => setType("Player")}
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div
                    className={hasError("type") ? "inline-errormsg" : "hidden"}
                  >
                    Please Select Your type
                  </div>
                </section>
                <section className="section-box ">
                  <div className="section-title">Type of Pitch</div>
                  <div className="section-content ">
                    <Button
                      variant="four"
                      className={
                        `rounded px-4 border-0 mx-2 mt-2 ` +
                        (pitch === "5" ? "active" : "")
                      }
                      onClick={(e) => setPitch("5")}
                    >
                      5
                    </Button>
                    <Button
                      variant="four"
                      className={
                        `rounded px-4 border-0 mx-2 mt-2 ` +
                        (pitch === "7" ? "active" : "")
                      }
                      onClick={(e) => setPitch("7")}
                    >
                      7
                    </Button>
                    <Button
                      variant="four"
                      className={
                        `rounded px-4 border-0 mx-2 mt-2 ` +
                        (pitch === "11" ? "active" : "")
                      }
                      onClick={(e) => setPitch("11")}
                    >
                      11
                    </Button>
                  </div>
                  <div
                    className={hasError("pitch") ? "inline-errormsg" : "hidden"}
                  >
                    Please Select number of pitch.
                  </div>
                </section>
                {/* <section className="section-box">
                  <div className="section-title">Team Name</div>
                  <div className="section-content  d-flex flex-column justify-content-center align-items-start">
                    <input
                      type="text"
                      class="border-less-input"
                      id="team-1"
                      placeholder="FEB"
                      value={teamName1}
                      onChange={(e) => setTeam1(e.target.value)}
                    ></input>
                    <b className="mx-5">VS</b>
                    <input
                      type="text"
                      class="border-less-input"
                      id="team-2"
                      value={teamName2}
                      placeholder="Team 2"
                      onChange={(e) => setTeam2(e.target.value)}
                    ></input>
                  </div>
                  <div
                    className={
                      hasError("teamName1") || hasError("teamName2")
                        ? "inline-errormsg"
                        : "hidden"
                    }
                  >
                    Please Select name of both team.
                  </div>
                </section> */}
                <section className="section-box flex-row">
                  <Button
                    variant="five"
                    onClick={() => onContinue("info")}
                    className="rounded px-4 border-0 mt-2 mr-2 f-right"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="three"
                    onClick={() => onContinue("detail")}
                    className="rounded px-4 border-0 mt-2 f-right"
                  >
                    Continue
                  </Button>
                </section>
              </Col>
            )}
            {currentActive === "detail" && (
              <Col
                className="rounded-xl section-container  bg-white border text-black-50 shadow-md"
                lg={8}
              >
                <section className="section-box">
                  <div className="section-title">Location</div>
                  <div className="section-content">
                    <select
                      class="border-less-input"
                      aria-label="Default select example"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                    >
                      <option selected>Select Location.</option>
                      {LocationArr.map((value, index) => (
                        <option value={value.name} id={index}>
                          {value.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div
                    className={
                      hasError("location") ? "inline-errormsg" : "hidden"
                    }
                  >
                    Please Select location of the game.
                  </div>
                </section>
                <section className="section-box">
                  <div className="section-title">Set Date</div>
                  <div className="section-content ">
                    <div className="calendar-container ">
                      <Calendar
                        minDate={new Date()}
                        onChange={(e) => onChangeDate(e)}
                        value={gameDate}
                      />
                    </div>
                  </div>
                  <div
                    className={hasError("gameDate") ? "inline-errormsg" : "hidden"}
                  >
                    Please Select the date.
                  </div>
                </section>
                <section className="section-box ">
                  <div className="section-title">Set Time</div>
                  <div className="section-content">
                    <input
                      className="border-less-input"
                      type="time"
                      onChange={(e) => setTime(e.target.value)}
                      value={time}
                      required
                    />
                  </div>
                  <div
                    className={hasError("time") ? "inline-errormsg" : "hidden"}
                  >
                    Please Select time of the game.
                  </div>
                </section>
                <section className="section-box ">
                  <div className="section-title">Set price</div>
                  <div className="section-content d-flex align-items-center">
                    <span className="mt-2">$</span>
                    <input
                      type="number"
                      className="form-control p-2 mx-2 mt-2"
                      placeholder="Cost"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      required
                      style={{ width: 80 }}
                    />
                    <span className="text-black-50 mt-2">/ Player</span>
                  </div>
                  <div
                    className={hasError("price") ? "inline-errormsg" : "hidden"}
                  >
                    Please Select price per player.
                  </div>
                </section>
                <section className="section-box flex-row">
                  <Button
                    variant="five"
                    onClick={() => onContinue("info")}
                    className="rounded px-4 border-0 mt-2 mr-2 f-right"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="three"
                    onClick={() => onContinue("publish")}
                    className="rounded px-4 border-0 mt-2 f-right"
                  >
                    Continue
                  </Button>
                </section>
              </Col>
            )}
            {currentActive === "publish" && (
              <Col
                className="rounded-xl section-container bg-white  border text-black-50 shadow-md"
                lg={7}
              >
                <section className="section-box">
                  {/* <div className="section-title">Review</div> */}
                  <div className="section-contenst d-flex">
                    <div className="mr-4">
                      <b>{type}</b>
                      <p>
                        <b>
                          {teamName1} Vs {teamName2}
                        </b>
                      </p>
                      <b>{pitch} Players/ Team</b>
                    </div>

                    <div>
                      <b className="block">{location}</b>
                      <p>
                        <b>Time :{time}</b>
                      </p>
                      <b>
                        {price}
                        {"$"} / Player
                      </b>
                    </div>
                  </div>
                </section>

                <section className="section-box">
                  <div className="section-title">Set Game as</div>
                  <div className="section-content">
                    <div>
                      <label class="checkbox-container">
                        <span>
                          <b>Public </b>
                          <p className="small mt-2">
                            It’s mean that anyone can join the game and see the
                            game in the list of games, so it’s publicly
                            published
                          </p>
                        </span>
                        <input
                          type="radio"
                          value={audence}
                          checked={"public" === audence}
                          onChange={(e) => setAudence("public")}
                          name="radio"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>

                    <div>
                      <label class="checkbox-container">
                        <span>
                          <b>Private </b>
                          <p className="small mt-2">
                            It’s mean that only people that has a generated code
                            given can join the game.
                          </p>
                        </span>
                        <input
                          type="radio"
                          name="radio"
                          value={audence}
                          checked={"private" === audence}
                          onChange={(e) => setAudence("private")}
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div
                    className={
                      hasError("audence") ? "inline-errormsg" : "hidden"
                    }
                  >
                    Please Select Private or public
                  </div>
                </section>

                <section className="section-box d-flex flex-column align-items-start">
                  <div className="d-flex align-items-baseline my-4 mx-2">
                    <span
                      className="d-flex bg-primary rounded-circle mr-3"
                      style={{ padding: 3 }}
                    ></span>
                    <div className="text-black-50 small">
                      Please check all the information, if you’ve any mistake
                      you can edit it right away. If all done, you can publish
                      the game.
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="five"
                      onClick={() => onContinue("detail")}
                      className="rounded px-4 border-0 mt-2 mr-2 f-right"
                    >
                      Previous
                    </Button>
                    <Button
                      variant="three"
                      onClick={() => saveGame("publish")}
                      className="rounded px-4 border-0 mt-2 f-right"
                    >
                      Publish
                    </Button>
                  </div>
                </section>
              </Col>
            )}
          </Row>
        </div>
      </form>
    </main>
  );
};
