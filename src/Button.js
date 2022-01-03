import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
  return (
    <Link to={props.link}>
      <button className={props.class} onClick={props.clickHandler}>
      {props.name}
      </button>
    </Link>
  )
}
