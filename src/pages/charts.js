import React, { useState, useEffect } from "react";
import "./pages.css";
import { Container, Row, Col } from "react-bootstrap";
import Greeting from "../components/greeting.js";
import Progress from "../components/progress.js";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import { getAthleteStats } from "../utils/backend";

export default function Charts() {
  const [athleteStats, setAthleteStats] = useState(null);
  const location = useLocation();
  console.log("location", location);
  const token = location.state.token;
  useEffect(() => {
    if (token) {
      async function updateStats() {
        await getAthleteStats(
          token.athlete.id,
          token.access_token,
          setAthleteStats
        );
      }
      updateStats();
    }
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Greeting
              name={
                token && token.hasOwnProperty("athlete")
                  ? token.athlete.firstname
                  : "Sidney"
              }
              activity="ran"
              metric="as far as"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Progress
              constantName="Yonge-University Subway Lines"
              constant="38800"
              value={
                athleteStats && athleteStats.hasOwnProperty("ytd_run_totals")
                  ? athleteStats.ytd_run_totals.distance
                  : 0
              }
            ></Progress>
          </Col>
          <Col>
            <Progress
              constantName="Lengths of PEI"
              constant="225000"
              value={
                athleteStats && athleteStats.hasOwnProperty("ytd_run_totals")
                  ? athleteStats.ytd_run_totals.distance
                  : 0
              }
            ></Progress>
          </Col>
          <Col>
            <Progress
              constantName="Marathons"
              constant="42195"
              value={
                athleteStats && athleteStats.hasOwnProperty("ytd_run_totals")
                  ? athleteStats.ytd_run_totals.distance
                  : 0
              }
            ></Progress>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
