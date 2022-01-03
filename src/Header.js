import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'


export default function Header(props) {
  if (props.searchOff === true) {
    return (
      <div>
        <header>
          <div className='logo'>
            <Link to={'/'} ><h1>Integrify React Pre-Assigment Full-Stack Course</h1></Link>
          </div>
          <Input placeholder='Search' inputHandler={props.inputHandler} disabled='true'/>
        </header>
      </div>
    )
  } else {
    return (
      <div>
        <header>
          <div className='logo'>
            <Link to={'/'} ><h1>Integrify React Pre-Assigment Full-Stack Course</h1></Link>
          </div>
          <Input placeholder='Search' inputHandler={props.inputHandler} />
        </header>
      </div>
    )
  }
}
