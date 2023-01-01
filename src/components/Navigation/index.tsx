import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import profileIcon from "assets/images/icons/img-user-default.png";

const Navigation = () => {
  return (
    <Container>
      <header>
        <Link to="/" className="logo">
          Shumento
        </Link>
        <div>
          <img src={profileIcon} alt="" />
        </div>
      </header>
    </Container>
  );
};

export default Navigation;
const Container = styled.header`
  header {
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #009688;
  }

  img {
    width: 35px;
  }
`;
