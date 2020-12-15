import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { seeNow } from "../utils/strava";
import "./seeNow.css";

export default class SeeNow extends Component {
  render() {
    return (
      <div className="seeNow">
        <Button onClick={() => seeNow()}>
          See Now
          <Image src="barChart.svg" alt="Bart Chart Icon"></Image>
        </Button>
      </div>
    );
  }
}
