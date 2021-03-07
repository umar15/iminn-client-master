import React from "react";
import { Col, Row, Table,Button } from "react-bootstrap";

// icons
import { AiFillStar } from "react-icons/ai";
import { Icon2 } from "../../assets/images/icon2";

const playersList = [
  {
    key: "1",
    name: "John Doe",
    rate: "3",
    credits: "1.8",
    played: "Midfielder",
    pic: require("../../assets/images/face1.svg").default,
  },
  {
    key: "2",
    name: "Michael Abraham",
    rate: "4",
    credits: "1.8",
    played: "Keeper",
    pic: require("../../assets/images/face2.svg").default,
  },
  {
    key: "3",
    name: "Toby Mac",
    rate: "5",
    credits: "1.8",
    played: "Keeper",
    pic: require("../../assets/images/face3.svg").default,
  },
  {
    key: "4",
    name: "Steven Mohammed",
    rate: "4",
    credits: "1.7",
    played: "Sticker",
    pic: require("../../assets/images/face4.svg").default,
  },
  {
    key: "5",
    name: "Jane Doe",
    rate: "4",
    credits: "1.8",
    played: "Defender",
    pic: require("../../assets/images/face5.svg").default,
  },
];

export const InviteTable = () => {
  return (
    <>
      <Table hover className="shadow-sm rounded-xl small d-none d-lg-table">
        <thead></thead>
        <tbody className="font-weight-bold">
          {playersList.map((value) => (
            <tr>
              <td className="py-2">
                <div>
                  <span className="im-text-primary mr-3 h6 mb-0 font-weight-bold">
                    {value.key}
                  </span>
                  <span>
                    <img
                      src={value.pic}
                      alt="pic"
                      height={50}
                      width={50}
                      className="object-cover rounded-circle border shadow-sm"
                    />
                  </span>
                </div>
              </td>
              <td className="py-4">{value.name}</td>

              <td className="text-center py-4">
                <div className="d-flex align-items-center justify-content-center">
                  <AiFillStar size={18} color="#ff8252" />
                  <span className="font-weight-bold ml-2">{value.rate}</span>
                </div>
              </td>
              <td className="text-center py-4">{value.credits}</td>
              <td className="text-center py-3">
                <span className="badge badge-success px-3 py-2 rounded-pill">
                  <div className="d-flex align-items-center justify-content-center">
                    <Icon2 className="im-text-primary" />
                    <span className="ml-1">God</span>
                  </div>
                </span>
              </td>
              <td className="text-center py-4">{value.played}</td>
              <td className="py-4">23</td>
              <td className="py-4">
                <Button
                  variant="four"
                  className="rounded-xl  border-0"
                >
                  Invite
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {playersList.map((value) => (
        <section className="rounded-xl bg-white p-4 mb-4 d-lg-none">
          <div>
            <span className="im-text-primary h6 mb-0 font-weight-bold">
              {value.key}
            </span>
            <span className="mx-3">
              <img
                src={value.pic}
                alt="pic"
                height={50}
                width={50}
                className="rounded-circle border shadow-sm object-cover"
              />
            </span>
            <span className="font-weight-bold"> Mark Otto</span>
          </div>
          <Row className="mt-3">
            <Col xs={6}>
              <div>
                <span className="im-text-primary text-capitalize">
                  Games Played
                </span>
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <span className="font-weight-bold text-capitalize">148</span>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={6}>
              <div>
                <span className="im-text-primary text-capitalize">
                  Average Ratings
                </span>
              </div>
            </Col>
            <Col xs={6}>
              <div className="d-flex align-items-center">
                <AiFillStar size={18} color="#ff8252" />
                <span className="font-weight-bold ml-2">4.8</span>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={6}>
              <div>
                <span className="im-text-primary text-capitalize">Credits</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className="d-flex align-items-center">
                <span className="font-weight-bold ml-2">1.482</span>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={6}>
              <div>
                <span className="im-text-primary text-capitalize">level</span>
              </div>
            </Col>
            <Col xs={6}>
              <span className="badge badge-success px-3 py-2 rounded-pill">
                <div className="d-flex align-items-center justify-content-center">
                  <Icon2 className="im-text-primary" />
                  <span className="ml-1">God</span>
                </div>
              </span>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={6}>
              <div>
                <span className="im-text-primary text-capitalize">Role</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className="d-flex align-items-center">
                <span className="font-weight-bold ml-2">Striker</span>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={6}>
              <div>
                <span className="im-text-primary text-capitalize">Age</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className="d-flex align-items-center">
                <span className="font-weight-bold ml-2">23</span>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6}>
              <div>
                <span className="im-text-primary text-capitalize">Age</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className="d-flex align-items-center">
                <span className="font-weight-bold ml-2">23</span>
              </div>
            </Col>
          </Row>
        </section>
      ))}
    </>
  );
};
