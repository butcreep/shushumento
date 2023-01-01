import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <footer>
        <div className="logo">Shumento</div>
        <div className="content">
          <p>
            대표: 송다영. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
          </p>
          <p> Copyright by (주)shumento.</p>
          <p> All right reserved. 이용약관 개인정보처리방침</p>
        </div>
        <div className="sns">
          <div className="sns-item"></div>
          <div className="sns-item"></div>
          <div className="sns-item"></div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #eaecee;
  padding: 60px 0;
  footer {
    max-width: 1140px;
    margin: 0 auto;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #009688;
    margin-bottom: 15px;
  }
  p {
    color: #767c81;
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
`;
