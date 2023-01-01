import React from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import figma from "assets/images/mainBnr/figma.jpg";
import earlybird from "assets/images/mainBnr/earlybird.jpg";
import kdcOpen from "assets/images/mainBnr/kdc-open.jpg";
import prefix from "assets/images/mainBnr/prefix.jpg";
SwiperCore.use([Navigation, Pagination, Autoplay]);
const MainBnr = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        loop={true}
        speed={1500}
        centeredSlides
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide>
          <div className="slide-content">
            <h2>
              프로덕트 디자인이 쉬워지는
              <br />
              피그마 활용법
            </h2>

            <img src={figma} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>
              놓치면 사라지는
              <br />
              할인 이벤트
            </h2>

            <img src={earlybird} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>
              국비지원 100% 환급 코스
              <br />
              내일배움코스 OPEN
            </h2>

            <img src={kdcOpen} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>
              데이터 분석을 시작하는
              <br />
              비전공자를 위한 SQL
            </h2>

            <img src={prefix} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default MainBnr;

const Container = styled.div`
  background-color: #009688;
  width: 100%;
  height: 500px;
  .swiper-container {
    max-width: 1140px;
    height: 100%;
  }
  .swiper-slide {
    padding: 0 100px;
  }
  .slide-content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 35px;
      color: #fff;
      font-weight: bold;
      line-height: 50px;
    }
    img {
      width: 450px;
      border-radius: 20px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff !important;
  }
`;
