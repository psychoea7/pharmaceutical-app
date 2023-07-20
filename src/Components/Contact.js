import React from "react";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <Container fluid className="contact__container">
      <Row className="px-5">
        <Col xs={12} md={6}>
          <FontAwesomeIcon
            className="contact__serviceIcon"
            icon={faHeadset}
            size="2x"
          />
          <span>
            کارشناسان رشد آزما همه روزه آماده مشاوره و پاسخگویی به سوالات شما
            عزیزان می باشند.
          </span>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end">
          <a href="tel:+989121112233">۰۹۱۲۱۱۱۲۲۳۳</a>
          <FontAwesomeIcon
            className="contact__serviceIcon"
            icon={faPhone}
            size="2x"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
