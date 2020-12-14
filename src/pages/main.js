import React from "react";
import "./pages.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { authSignIn } from "../utils/strava";
import AuthButton from "../components/authButton";

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm>
            <h1>Run Wrap Up</h1>
            <p>
              Connect to Strava and see your exercise in a brand new light.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
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
