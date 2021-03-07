import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import firebase from "../firebase";
import userService from "../services/user.service";
import { loginUserAction } from "../actions/authenticationActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const RoleSelect = (props) => {
  var history= useHistory();
  const [role, setrole] = useState();
  let displayName = props.location.state.displayName;
  const onsubmit = () => {
    var user = firebase.auth().currentUser;
    // console.log("user,displayName", user, displayName, role);
    user
      .updateProfile({
        displayName: displayName,
        address: "Temp Address",
        SelectedRole:role,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
    let userdb = {
      email: user.email,
      phone: user.phoneNumber,
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: displayName,
      role: role,
      is_visited:false
    };
    localStorage.setItem("user", JSON.stringify(userdb));
    props.dispatch(loginUserAction(userdb));
    userService.create(userdb);
    history.push("/")
  };
  return (
    <section className="text-center">
      <div className="mb-5">
        <img src={require("../assets/images/logo.svg").default} alt="Logo" />
      </div>
      <div>
        <div className="im-text-primary font-weight-bold mb-3">
          Personalize Your Profile
        </div>
        <h4 className="font-weight-bold mb-2">
          Select a Role that’s Fit with you!
        </h4>
        <Row className="row-cols-1 row-cols-md-2 row-cols-xl-4 mx-0">
          <Col
            onClick={(e) => setrole("Keeper")}
            className="d-flex justify-content-center"
          >
            <div style={{ width: 250 }}>
              <Button
                variant="btn-link"
                className="rounded-xl w-100 d-flex justify-content-center"
              >
                <img
                  src={require("../assets/images/role-select1.svg").default}
                  alt="pic"
                />
              </Button>
            </div>
          </Col>

          <Col
            onClick={(e) => setrole("Defender")}
            className="d-flex justify-content-center"
          >
            <div style={{ width: 250 }}>
              <Button
                variant="btn-link"
                className="rounded-xl w-100 d-flex justify-content-center"
              >
                <img
                  src={require("../assets/images/role-select2.svg").default}
                  alt="pic"
                />
              </Button>
            </div>
          </Col>

          <Col
            onClick={(e) => setrole("Midfielder")}
            className="d-flex justify-content-center"
          >
            <div style={{ width: 250 }}>
              <Button
                variant="btn-link"
                className="rounded-xl w-100 d-flex justify-content-center"
              >
                <img
                  src={require("../assets/images/role-select3.svg").default}
                  alt="pic"
                />
              </Button>
            </div>
          </Col>

          <Col
            onClick={(e) => setrole("Striker")}
            className="d-flex justify-content-center"
          >
            <div style={{ width: 250 }}>
              <Button
                variant="btn-link"
                className="rounded-xl w-100 d-flex justify-content-center"
              >
                <img
                  src={require("../assets/images/role-select4.svg").default}
                  alt="pic"
                />
              </Button>
            </div>
          </Col>
        </Row>
        <div className="text-center col-12 col-md-6 col-xl-2 mx-auto mt-2">
          <Button
            onClick={(e) => onsubmit()}
            variant="three"
            block
            className="rounded-pill py-3"
          >
            Apply
          </Button>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(RoleSelect);
