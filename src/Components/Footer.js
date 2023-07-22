import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faInstagram } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <Container className="footer__container">
      <Row>
        <Col xs={12} md={8}>
          <p className="footer__about">
            آزمایشگاه تحقیقاتی رشدآزما از سال ۱۳۹۵ فعالیت خود را در حوزه علوم
            سلولی و مولکولی آغاز کرد و در سال ۱۴۰۰ تحت عنوان شرکت حامی وزین
            رشدآزما با مسئولیت محدود با شماره ثبت ۴۱۴۳۰ فعالیت رسمی خود را با
            هدف ارائه خدمات آزمایشگاهی در زمینه های سلولی ، مولکولی، حیوانی،
            میکروبی و گیاهی به دانشگاه ها ، بیمارستان ها ، اساتید، دانشجویان و
            پژوهشگران به ثبت رسانید. این شرکت از ابتدا تا کنون با بهره گیری از
            کادری مجرب و متد های روز دنیا بیش از چند صد پروژه پژوهشی را به اتمام
            رسانیده است و همواره بر آن است که پژوهشگران و دانشجویان محترم
            بتوانند در فضایی آرام و مفرح با حداکثر بهره مندی از امکانات علمی تحت
            نظارت متخصصین رشدآزما آموزش دیده و پروژه های تحقیقاتی خودرا به
            سرانجام رسانند.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <img className="footer__logo img-fluid" src={Logo} />
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <Col md={6} xs={12}>
          <p className="footer__copyRight">
            کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد و هرگونه کپی
            برداری شامل پیگرد قانونی می باشد.
          </p>
        </Col>
        <Col md={6} xs={12} className="d-flex justify-content-end">
          
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
