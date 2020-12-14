import React from "react";
import "./pages.css";
import { Container, Row, Col } from "react-bootstrap";
import Greeting from "../components/greeting.js";
import SeeNow from "../components/seeNow.js";

export default function Select() {
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
            <SeeNow />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
