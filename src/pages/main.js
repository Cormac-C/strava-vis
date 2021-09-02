import React from "react";
import "./pages.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import AuthButton from "../components/authButton";

export default function Home() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col sm>
            <h1>Run Wrap Up</h1>
            <p>
              Connect to Strava and see your exercise in a brand new light.
            </p>
            <AuthButton />
          </Col>
          <Col sm>
            <Image src="charts.svg" alt="Charts Graphic" fluid></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
