import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import "./seeNow.css";

export default class SeeNow extends Component {
  render() {
    return (
      <div className="seeNow">
        <Button>
          See Now
          <Image src="barChart.svg" alt="Bart Chart Icon"></Image>
        </Button>
      </div>
    );
  }
}
