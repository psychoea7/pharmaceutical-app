import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./ServiceInfo.css";

const ServiceInfo = () => {
  return (
    <Container className="serviceInfo__container mt-5 mb-5">
      <Row>
        <h4 className="serviceInfo__heading">خدمات پیشرو در آموزش</h4>
      </Row>
      <Row>
        <p className="serviceInfo__paragraph">
          تا به حال شده که برای یاد گرفتن یه مهارت جدید که بتونی با اون کار خاصی
          بکنی، شغلی بگیری، یا پروژه‌ای انجام بدی، بین انواع کلاس‌ها و کتاب‌ها و
          سی‌دی‌هایی که واقعا نمی‌شه اطمینان کرد چه محتوایی دارن و چقدر به کار
          آدم میان سردرگم شده باشی؟ ما این مشکل را حل کرده ایم
        </p>
      </Row>
      <Row>
        <ul className="serviceInfo__list">
          <li>
            <FontAwesomeIcon icon={faCheck} className="serviceInfo__icon" />{" "}
            دسترسی به فایل محصول
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="serviceInfo__icon" />{" "}
            فعال‌سازی آنی لینک دانلود، پس از ثبت سفارش
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="serviceInfo__icon" />{" "}
            تضمین کیفیت آموزش ها
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="serviceInfo__icon" />{" "}
            برگزاری کلاس های حضوری
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="serviceInfo__icon" />{" "}
            انتخاب مدرس دوره از بین چندین مدرس
          </li>
        </ul>
      </Row>
    </Container>
  );
};

export default ServiceInfo;
