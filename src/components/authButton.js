import React, { Component } from "react";
import { authSignIn } from "../utils/strava";
import { Button, Image } from "react-bootstrap";
import "./authButton.css";

export default class AuthButton extends Component {
  render() {
    return (
      <div className="auth">
        <Button>
          <Image
            className="auth"
            src="btn_strava_connectwith_orange@2x.png"
            alt="Charts Graphic"
            onClick={() => authSignIn()}
          ></Image>
        </Button>
      </div>
    );
  }
}
