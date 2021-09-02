import React, { useState, useEffect } from "react";
import "./pages.css";
import { Container, Row, Col } from "react-bootstrap";
import Greeting from "../components/greeting.js";
import SeeNow from "../components/seeNow.js";
import { readCodeAndScope } from "../utils/strava";
import { getToken } from "../utils/backend";

export default function Select() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    let urlParams = readCodeAndScope();
    if (urlParams && !urlParams.error) {
      async function updateToken() {
        await getToken(urlParams.code, setToken);
      }
      updateToken();
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
            <SeeNow token={token} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
