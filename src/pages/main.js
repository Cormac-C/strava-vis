import React from "react";
import "./pages.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ".././charts.svg";

export default function Home() {
  return (
    <div vertical-align-middle>
      <Container align-middle>
        <Row align-middle>
          <Col sm>
            <h1>Run Wrap Up</h1>
            <p>
              Connect to Strava and see your exercise in a brand new light.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <Button>Link to Strava</Button>
          </Col>
          <Col sm>
            <Image src="charts.svg" alt="Charts Graphic" fluid></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
