import React from "react";
import "./pages.css";
import { Container, Row, Col } from "react-bootstrap";
import Greeting from "../components/greeting.js";
import Progress from "../components/progress.js";

export default function Charts() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Greeting name="Sidney" activity="ran" metric="as far as" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Progress
              constantName="Yonge-University Subway Lines"
              constant="1500"
              value="7070"
            ></Progress>
          </Col>
          <Col>
            <Progress
              constantName="Lengths of PEI"
              constant="14"
              value="32"
            ></Progress>
          </Col>
          <Col>
            <Progress
              constantName="Marathons"
              constant="26.2"
              value="340.6"
            ></Progress>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
