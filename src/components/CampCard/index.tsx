import React from 'react'
import { Link } from 'react-router-dom'
import { ICamp } from '../../types/type'

interface IProps {
  camp: ICamp
}

const CampCard = ({ camp }: IProps) => {
  return (
    <Link to={`/camp/${camp.id}`}>
      <div>
        <div>
          <span>{camp.status}</span>
          <span>{camp.field}</span>
          <span>{camp.skill}</span>
        </div>
        <div>{camp.title}</div>
        <div>{camp.startDate}</div>
      </div>
    </Link>
  )
}

export default CampCard
