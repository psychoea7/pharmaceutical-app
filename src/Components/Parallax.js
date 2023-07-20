import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBook,
  faCode,
  faUserGraduate,
  faLayerGroup,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "./Parallax.css";
import CountUp from "./CountUp"; // Import the CountUp component

function Parallax() {
 

  return (
    <Container fluid className="parallax__container">
      <Row className="parallax__row">
        <Col xs={12} md={4} className="parallax__item">
          <FontAwesomeIcon icon={faUserGraduate} className="parallax__icon" />
          <div className="parallax__description">
            <h5>تعداد کارآموزان در حال آموزش</h5>
            <CountUp end={10} />{" "}
            {/* Replace 10 with the desired count for Icon 1 */}
          </div>
        </Col>
        <Col xs={12} md={4} className="parallax__item">
          <FontAwesomeIcon icon={faLayerGroup} className="parallax__icon" />
          <div className="parallax__description">
            <h5>تعداد دوره ها</h5>
            <CountUp end={20} />{" "}
            {/* Replace 20 with the desired count for Icon 2 */}
          </div>
        </Col>
        <Col xs={12} md={4} className="parallax__item">
          <FontAwesomeIcon icon={faAddressCard} className="parallax__icon" />
          <div className="parallax__description">
            <h5>تعداد اساتید دانشگاهی مرتبط با رشد آزما</h5>
            <CountUp end={30} />{" "}
            {/* Replace 30 with the desired count for Icon 3 */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Parallax;
