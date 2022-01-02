import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
  return (
    <button className={props.class} onClick={props.clickHandler}>
      <Link to={props.link}>{props.name}</Link>
    </button>
  )
}
