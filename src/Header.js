import React from 'react'
import Input from './Input'

export default function Header(props) {
  return (
    <div>
      <header>
        <div className='logo'>
          <h1>Integrify React Pre-Assigment Full-Stack Course</h1>
        </div>
          <Input placeholder='Search' inputHandler={props.inputHandler} />
      </header>
    </div>
  )
}
