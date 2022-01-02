import React from 'react'

export default function Input(props) {
  return (
    <input placeholder={props.placeholder} onChange={props.inputHandler}>
      
    </input>
  )
}
