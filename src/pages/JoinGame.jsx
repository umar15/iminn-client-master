import React, { useEffect, useState, useCallback } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
// Icons
import ArrowBack from "../assets/images/arrow-back.svg";
import { BiBookOpen, BiCalendar, BiDollar, BiMap } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import gameService from "../services/game.service";
import Avatar from "react-avatar";

// const gameDetails = [
//   {
//     icon: <BiMap color="#ff8252" size={24} className="mr-2" />,
//     text: "Shady Smile Sport Centre, London",
//   },
//   {
//     icon: <BiCalendar color="#ff8252" size={24} className="mr-2" />,
//     text: "2nd of December, 04:15 PM",
//   },
//   {
//     icon: <BiDollar color="#ff8252" size={24} className="mr-2" />,
//     text: "$150.00",
//   },
// ];

const roleDetails = [
  {
    number: 2,
    name: "Keeper",
    className: "mb-3",
  },
  {
    number: 4,
    name: "Midfielders",
    className: "mb-3",
  },
  {
    number: 4,
    name: "Defenders",
  },
  {
    number: 4,
    name: "Strikers",
  },
];

// let playersTeam2 = [
// ];
// let playersTeam1 = [];

// const joinRoleArr = [
//   { name: "Keeper", className: "border-bottom" },
//   { name: "Defender", className: "border-bottom" },
//   { name: "Midfielder", className: "border-bottom" },
//   { name: "Striker" },
// ];

const getFromLocal = () => {
  let localUser = localStorage.getItem("user");
  if (localUser) {
    let user1 = JSON.parse(localUser);
    return user1;
  }
  return false;
};
const JoinGame = (props) => {
  var history = useHistory();
  let { gameId } = useParams();
  // const [toggleOne1, setToggleOne] = useState(false);
  // const [toggleOne2, setToggleTwo] = useState(false);
  const [toggleChat, setToggleChat] = useState(false);
  // const [role, setRole] = useState("Striker");
  const [playersTeam2, setPlayers2] = useState([]);
  const [playersTeam1, setPlayers1] = useState([]);
  const [game, setGame] = useState(
    props.location.data ? props.location.data : {}
  );
  const user = useState(
    props.response.login.user ? props.response.login.user : getFromLocal()
  );

  const getGames = useCallback((items) => {
    console.log(user);
    let playersOne = [];
    let playersTwo = [];
    // for (var i = 0; i < items.pitch; i++) {
    //   playersOne.push({
    //     freeSlot: "Free slot",
    //     titleRole: i < 3 ? roleDetails[i].name : "Strickers",
    //   });
    //   playersTwo.push({
    //     freeSlot: "Free slot",
    //     titleRole: i < 3 ? roleDetails[i].name : "Strickers",
    //   });
    // }
    if (items.team1 && items.team1.length > 0) {
      items.team1.map((item) => {
        return (
          playersOne.unshift({
          titleName: item.user.displayName,
          className: "text-black-50",
          titleRole: item.user.role,
          icon: "$",
          userId:item.user.uid,
          photo:item.user.photoURL
        })
        )
        
      });
    }
    if (items.team2 && items.team2.length > 0) {
      items.team2.map((item) => {
        return (
          playersTwo.unshift({
          titleName: item.user.displayName,
          className: "text-black-50",
          titleRole: item.user.role,
          icon: "$",
          photo:item.user.photoURL
        })
        )
        ;
      });
    }
    setPlayers1(playersOne);
    setPlayers2(playersTwo);
    setGame(items);
	}, [user])
	
  const joinOrLeaveGame = (team) => {
    if (!user) {
      return history.push("/login");
    }

    if(playerIsInTeamA||playerIsInTeamB){
      return gameService.deleteUserInGame(gameService
        .getGameById(gameId))
    }
    
    user["teamName"] = team;

    if (team === game.teamName1) {
      return gameService
        .joinGame1(gameId, {
          user,
        })
        .then((snapshot) => {
          history.push("/join-success", { role: user.role, teamName: team });
        });
    } else {
      return gameService
        .joinGame2(gameId, {
          user,
        })
        .then((snapshot) => {
          history.push("/join-success", { role: user.role, teamName: team });
        });
    }
  };

  useEffect(() => {
    return gameService
      .getGameById(gameId)
      .then((snapshot) => getGames(snapshot.data()));
  }, [gameId, getGames]);

  const playerIsInTeamA= () => {
    return playersTeam1.filter(player=>player.userId===user.uid).length>0
   }

   const playerIsInTeamB= () => {
    return playersTeam2.filter(player=>player.userId===user.uid).length>0
   }
  return (
    <main className="container-fluid mb-5 pb-5">
      <form>
        <div className="px-3 px-md-3">
          <div className="mb-2">
            <Link to="/" className="p-0">
              <img height={40} width={40} src={ArrowBack} alt="Back" />
            </Link>
          </div>
          <div className="d-flex">
            <div className="d-flex align-items-baseline mb-4">
              <BiBookOpen color="#ff8252" size={20} className="mr-3" />
              <h4 className="font-weight-bold text-dark mb-0">Join a Game</h4>
            </div>
          </div>
        </div>
        <Col className="bg-white border rounded-xl">
          <Row xs={12} xl={12}>
            <section className="rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column">
              <div className="font-weight-bold text-capitalize h5 mb-4">
                Game Details
              </div>
              <div className="d-flex align-items-center mb-3">
                <BiMap color="#ff8252" size={24} className="mr-2" />
                <span className="text-black-50">{game.location}</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <BiCalendar color="#ff8252" size={24} className="mr-2" />
                <span className="text-black-50">
                  {game.time}
                  {/* {moment(game?.gameDate?.seconds).format("LL")} */}
                </span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <BiDollar color="#ff8252" size={24} className="mr-2" />
                <span className="text-black-50">
                  {"$"}
                  {game.price}
                </span>
              </div>
            </section>

            <section className="rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column">
              <div className="mb-4 d-flex align-items-center mt-5 mb-3">
                <span className="text-black-50 text-capitalize mr-2 font-weight-bold">
                  Available slots
                </span>
                <span className="badge badge-warning rounded-circle p-2 font-weight-bold">
                  4
                </span>
              </div>

              <div className="row align-items-center mb-3">
                {roleDetails.map((value) => (
                  <Col xs={6} className={` ${value.className}`}>
                    <div className="font-weight-bold">
                      <span className="im-text-primary mr-2">
                        {value.number}
                      </span>
                      <span className="text-black-50 text-capitalize">
                        {value.name}
                      </span>
                    </div>
                  </Col>
                ))}
              </div>
            </section>
          </Row>
          <Col md={8} xl={8}>
            <section className="rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column">
              <div className="font-weight-bold text-capitalize h5 mb-4">
                Players
              </div>
              <Row className="text-center flex-column flex-md-row mx-0">
                <Col>
                  <div>
                    <div className="im-text-primary font-weight-bold text-capitalize">
                      {game.teamName1}
                    </div>
                    {playersTeam1.map((value) => (
                      <div className="d-flex flex-column flex-lg-row  justify-content-center ml-lg-3 mt-4">
                        <span>
                          <div>
                            <Avatar
                               color={Avatar.getRandomColor("sitebase", [
                                "red",
                                "pink",
                                "orange",
                                "aqua",
                                "gray",
                                "green",
                                "blue",
                                "teal"
                              ])}
                              size="45"
                              round={true}
                              src={value.photo}
                              name={value.titleName}
                            />
                          </div>
                          <div className="font-weight-bold">
                            {value.titleName}
                          </div>

                          <div className="im-text-primary">
                            {value.titleRole}
                          </div>
                        </span>
                        <span
                          className={`ml-lg-2 order-first order-lg-last font-weight-bold ${value.className}`}
                        >
                          {value.icon}
                        </span>
                      </div>
                    ))}
                   { !(playerIsInTeamB()) && (<Button
                      type="button"
                      block
                      variant="four"
                      onClick={(e) => joinOrLeaveGame(game.teamName1)}
                      className=" my-2 py-2 border-0 d-flex align-items-center"
                    >
                      <span className="mx-auto font-weight-bold text-capitalize">
                       {playerIsInTeamA()?"Leave Team A":"Join Team A"}
                      </span>
                    </Button>)}
                  </div>
                </Col>
                <Col className="my-5 my-md-auto">
                  <h6 className="mb-0 font-weight-bold text-black-50 text-uppercase">
                    VS
                  </h6>
                </Col>
                <Col>
                  <div>
                    <div className="im-text-primary font-weight-bold text-capitalize">
                      {game.teamName2}
                    </div>
                    {playersTeam2.map((value) => (
                      <div className="d-flex flex-column flex-lg-row  justify-content-center ml-lg-3 mt-4">
                        <span>
                          <div>
                            <Avatar
                              color={Avatar.getRandomColor("sitebase", [
                                "red",
                                "pink",
                                "orange",
                                "aqua",
                                "gray",
                                "green",
                                "blue",
                                "teal"
                              ])}
                              size="45"
                              round={true}
                              src={value.photo}
                              name={value.titleName}
                            />
                          </div>
                          <div className="font-weight-bold">
                            {value.titleName}
                          </div>
                          <div className="text-black-50">{value.freeSlot}</div>
                          <div className="im-text-primary">
                            {value.titleRole}
                          </div>
                        </span>
                        <span
                          className={`ml-lg-2 order-first order-lg-last font-weight-bold ${value.className}`}
                        >
                          {value.icon}
                        </span>
                      </div>
                    ))}
                    { !(playerIsInTeamA() ) && <Button
                      type="button"
                      block
                      variant="four"
                      onClick={(e) => joinOrLeaveGame(game.teamName2)}
                      className="py-2 my-2 border-0 active d-flex align-items-center"
                    >
                      <span className="mx-auto font-weight-bold text-capitalize">
                      {playerIsInTeamB()?"Leave Team B":"Join Team B"}
                      </span>
                    </Button>}
                  </div>
                </Col>
              </Row>
            </section>
          </Col>
        </Col>
      </form>

      {/* Chat */}
      <>
        <Button
          onClick={() => setToggleChat(!toggleChat)}
          variant="four"
          className="active rounded-circle d-flex align-items-center justify-content-center p-0 fixed-bottom m-4"
          style={{ height: 50, width: 50, left: "unset" }}
        >
          {toggleChat ? <IoMdClose size={20} /> : <BsChat size={20} />}
        </Button>
        {toggleChat ? (
          <section
            className="rounded-xl bg-white p-4 m-4 fixed-bottom"
            style={{ width: 300, left: "unset", right: 60 }}
          >
            <h6 className="font-weight-bold mb-3">Chats</h6>
            <div
              className="bg-light rounded-xl scroll-box d-flex flex-column"
              style={{ height: 400 }}
            >
              <div className="small p-3 mr-auto">
                <div className="text-black-50 text-capitalize mb-1">
                  User Name
                </div>
                <div className="chat-radius-left bg-gray text-secondary p-3">
                  Lorem, ipsum dolor.
                </div>
              </div>

              <div className="small p-3 mr-auto">
                <div className="text-black-50 text-capitalize mb-1">
                  User Name
                </div>
                <div className="chat-radius-left bg-gray text-secondary p-3">
                  i hope we can play without raining again.
                </div>
              </div>

              <div className="small p-3 text-right ml-auto">
                <div className="chat-radius-right bg-primary text-white p-3">
                  Hello guys, i'm John!
                </div>
                <div className="text-black-50 text-capitalize mt-1">
                  User Name
                </div>
              </div>

              <div className="small p-3 mr-auto">
                <div className="text-black-50 text-capitalize mb-1">
                  User Name
                </div>
                <div className="chat-radius-left bg-gray text-secondary p-3">
                  i hope we can play without raining again.
                </div>
              </div>

              <div className="small p-3 mr-auto">
                <div className="text-black-50 text-capitalize mb-1">
                  User Name
                </div>
                <div className="chat-radius-left bg-gray text-secondary p-3">
                  i hope we can play without raining again.
                </div>
              </div>

              <div className="small p-3 text-right ml-auto">
                <div className="chat-radius-right bg-primary text-white p-3">
                  Hello guys, i'm John!
                </div>
                <div className="text-black-50 text-capitalize mt-1">
                  User Name
                </div>
              </div>
              {/* -- */}
            </div>
            <form className="mt-2 position-relative">
              <textarea
                className="form-control rounded-lg"
                rows="2"
                placeholder="Type here..."
              />
              <Button
                variant="link"
                className="rounded-circle button-send-icon"
              >
                <span className="im-text-primary">
                  <FiSend />
                </span>
              </Button>
            </form>
          </section>
        ) : null}
      </>
      {/* Chat End */}
    </main>
  );
};

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(JoinGame);
// export default Login;
