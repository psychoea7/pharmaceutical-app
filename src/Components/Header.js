import React from "react";
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";
import HeaderLogo from "../Assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderNone, faDna, faShieldVirus, faVirus } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Container className="header__container" fluid>
      <div className="header__text-wrapper">
        <img className="header__logo" src={HeaderLogo} alt="Logo" />
        <p className="header__text">
          برای دریافت بهتر خدمات و بهره مندی از آخرین اخبار در سایت رشد آزما با
          ما همراه باشید.
        </p>
        <Row className="header__services">
          <Col md={3} xs={12}>
            <div className="header__servicesItem">
              <FontAwesomeIcon
                className="header__serviceIcon"
                icon={faBorderNone}
                size="2x"
              />
              <span>خدمات ۱</span>
            </div>
          </Col>
          <Col md={3} xs={12}>
            <div className="header__servicesItem">
              <FontAwesomeIcon
                className="header__serviceIcon"
                icon={faDna}
                size="2x"
              />
              <span>خدمات ۲</span>
            </div>
          </Col>
          <Col md={3} xs={12}>
            <div className="header__servicesItem">
              <FontAwesomeIcon
                className="header__serviceIcon"
                icon={faVirus}
                size="2x"
              />
              <span>خدمات ۳</span>
            </div>
          </Col>
          <Col md={3} xs={12}>
            <div className="header__servicesItem">
              <FontAwesomeIcon
                className="header__serviceIcon"
                icon={faShieldVirus}
                size="2x"
              />
              <span>خدمات ۴</span>
            </div>
          </Col>
        </Row>
      </div>

      <div className="header__overlay" />
    </Container>
  );
}

export default Header;
