import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICamp } from "../../types/type";

interface IProps {
  camp: ICamp;
}

const CampCard = ({ camp }: IProps) => {
  return (
    <Container>
      <Link to={`/camp/${camp.id}`}>
        <img src={camp.thumbnail} alt={camp.name} />

        <div className="flex_content">
          <span>{camp.field}</span>
          <span>{camp.skill}</span>
          <span className="status">{camp.status}</span>
        </div>
        <div className="camp_name">{camp.name}</div>
        <div>{camp.startDate} 시작</div>
      </Link>
    </Container>
  );
};

export default CampCard;

const Container = styled.div`
  .flex_content {
    display: flex;
    span {
      font-size: 12px;
      line-height: 15px;
      font-weight: 400;
      color: rgb(60, 65, 68);
      margin-right: 5px;
    }
    .status {
      color: rgb(238, 126, 65);
    }
  }
  .camp_name {
    font-size: 17px;
    line-height: 20px;
    color: rgb(4, 5, 5);
    font-weight: 600;
    margin: 10px 0;
  }
  img {
    width: 100%;
    height: 190px;
    border-radius: 15px;
    margin-bottom: 15px;
  }
`;
