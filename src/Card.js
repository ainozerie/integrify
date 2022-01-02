import React from 'react'
import Button from './Button'

export default function Card(props) {
  return (
    <div className='card' key={props.name}>
      <p>Name: {props.name}</p>
      <p>Type: {props.brewery_type[0].toUpperCase()}{props.brewery_type.slice(1)}</p>
      <p>City: {props.city}</p>
      <Button class='detail' name='View Detail' clickHandler={props.clickHandler} link={props.name} />
    </div>
  )
}
