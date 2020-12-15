import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Ring from "./ring.js";
import "./progress.css";

export default class Progress extends Component {
  render() {
    const constantName = this.props.constantName || "Constant";
    const constant = this.props.constant || 100;
    const value = this.props.value || 50;
    let progress = value / constant;
    progress = Math.round(progress * 10) / 10;
    let decimal = progress - Math.round(progress - 0.5) || progress > 0;
    return (
      <div className="graphic">
        <Row>
          <Col>
            <Ring radius="175" percentage={decimal}></Ring>
            <h1>{progress}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>{constantName}</h3>
          </Col>
        </Row>
      </div>
    );
  }
}
