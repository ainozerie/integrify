import React from 'react'

export default function Button(props) {
  return (
    <button className={props.class} onClick={props.clickHandler}>
      {props.name}
    </button>
  )
}
