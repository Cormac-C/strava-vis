import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./seeNow.css";

export default class SeeNow extends Component {
  render() {
    return (
      <div className="seeNow">
        <Link
          to={{
            pathname: "/charts",
            state: { fromDashboard: true, token: this.props.token },
          }}
        >
          <Button>
            See Now
            <Image src="barChart.svg" alt="Bart Chart Icon"></Image>
          </Button>
        </Link>
      </div>
    );
  }
}
