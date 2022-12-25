import React from 'react'
import { Link } from 'react-router-dom'
import profileIcon from '../../assets/images/icons/img-user-default.png'

const Navigation = () => {
  return (
    <div>
      <Link to="/">Shumento</Link>
      <Link to="/">
        <img src={profileIcon} alt="" />
      </Link>
    </div>
  )
}

export default Navigation
