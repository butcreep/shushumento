import React from "react";
import { Link } from "react-router-dom";
import { ICamp } from "../../types/type";

interface IProps {
  camp: ICamp;
}

const CampCard = ({ camp }: IProps) => {
  return (
    <Link to={`/camp/${camp.id}`}>
      <div>
        <div>{camp.name}</div>
        <div>{camp.type}</div>
        <span>{camp.status}</span>
        <div>
          <span>{camp.field}</span>
          <span>{camp.skill}</span>
        </div>
        <div>{camp.startDate}</div>
        <div>{camp.thumbnail}</div>
      </div>
    </Link>
  );
};

export default CampCard;
