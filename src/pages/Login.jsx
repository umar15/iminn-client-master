import React, { useEffect, useState } from "react";
import { Form, Button, Carousel } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { loginUserAction } from "../actions/authenticationActions";
import { connect } from "react-redux";

import firebase from "../firebase";
import userService from "../services/user.service";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        userService
          .getUserByUID(user.uid)
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              let lolUser = doc.data();
              user = {
                email: user.email,
                phone: user.phoneNumber,
                uid: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName,
                role: lolUser.role,
                is_visited:true
              };
              localStorage.setItem("user", JSON.stringify(user));
              props.dispatch(loginUserAction(user));
              history.push("/");
            });
          })
          .catch(function (error) {
            console.log("Error getting documents: ", error);
          });
      })
      .catch((error) => {
        console.log(error)
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
      });

    // setToken(token);
  };

  const googleSingIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        userService
          .getUserByUID(user.uid)
          .then(function (querySnapshot) {
            // console.log('querySnapshot', querySnapshot)
            if(querySnapshot.size === 0){
              history.push("/role-select", { displayName:user.displayName });
              return;
            }
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              let lolUser = doc.data();
              if(!lolUser.role){
                history.push("/role-select", { displayName:user.displayName });
                return;
              }
              user = {
                email: user.email,
                phone: user.phoneNumber,
                uid: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName,
                role: lolUser.role,
                is_visited:true
              };
              localStorage.setItem("user", JSON.stringify(user));
              props.dispatch(loginUserAction(user));
              history.push("/");
            });
          })
          .catch(function (error) {
            history.push("/role-select", { displayName:user.displayName });
            console.log("Error getting documents: ", error);
          });
        // ...
      })
      .catch((error) => {
        console.log('error', error)
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });
  };
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="login-container">
      <div className="login-info">
        <div className="login_svg">
          <img
            src={require("../assets/images/login_svc.svg").default}
            alt="Logo"
          />
        </div>
        <div className="login_svg_2">
          <img
            src={require("../assets/images/login_svc2.svg").default}
            alt="Logo"
          />
        </div>
        <div className="login_dot">
          <img
            src={require("../assets/images/login_dot.svg").default}
            alt="Logo"
          />
        </div>
        <div className="login_dot_2">
          <img
            src={require("../assets/images/login_dot_2.svg").default}
            alt="Logo"
          />
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="carousel-content">
              <h4 className="carousel-title">
                Let's Climb the Highest Ranking in Your City
              </h4>
              <p className="carousel-body">
                Explore the game that will make you superstar among thousand of
                players in you city, Awesome game, awesome you!
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              <h4 className="carousel-title">
                Let's Climb the Highest Ranking in Your City
              </h4>
              <p className="carousel-body">
                Explore the game that will make you superstar among thousand of
                players in you city, Awesome game, awesome you!
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              <h4 className="carousel-title">
                Let's Climb the Highest Ranking in Your City
              </h4>
              <p className="carousel-body">
                Explore the game that will make you superstar among thousand of
                players in you city, Awesome game, awesome you!
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="login-form-container">
        <div className="pb-4 pt-3 m-0">
          <img src={require("../assets/images/logo.svg").default} alt="Logo" />
        </div>
        <div className="login-form  max-w-20">
          <div className="text-center">
            <p className="im-text-primary small font-weight-bold">
              Welcome back to IMINN!
            </p>
            <h6 className="font-weight-bold mb-2">
              Let's Login to your Account.
            </h6>
          </div>

          <div className="login-singup-cont">
            <span className="mx-1">
              <Button
                as={Link}
                to="/login"
                block
                variant="three"
                className="rounded-pill px-4  py-1 d-flex justify-content-center align-items-center text-capitalize"
              >
                Login
              </Button>
            </span>
            <span className="mx-1">
              <Button
                as={Link}
                to="/signup"
                block
                variant="three"
                className="rounded-pill px-4 btn-five py-1"
              >
                Sing Up
              </Button>
            </span>
          </div>

          <Form class="" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-black-50 small">
                E-mail Address
              </Form.Label>
              <Form.Control
                className="text-black-50 small p-3 form-control-2"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your e-mail"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-black-50 small ">Password</Form.Label>
              <Form.Control
                className="text-black-50 small p-3 form-control-2"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Create your password"
              />
            </Form.Group>

            <Button
              type="submit"
              block
              variant="three"
              className="rounded-pill py-2 my-4 d-flex justify-content-center align-items-center text-capitalize"
            >
              Login
            </Button>
          </Form>

          <div className="divider">
            <span className="horizontal-line"></span>
            <p className="text-black-50 small"> OR USING </p>
            <span className="horizontal-line bg-black-50"></span>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="primary-4"
              className="rounded-pill px-2 bg-white mr-4 flex"
              onClick={googleSingIn}
            >
              <span>
                <FcGoogle />
              </span>
              <span className="ml-2">Google</span>
            </Button>
            <Button className="rounded-pill px-2 mr-4 px-1">
              <span>
                <ImFacebook />
              </span>
              <span className="ml-2">Facebook</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(Login);
// export default Login;
