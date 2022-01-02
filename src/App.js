import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Single from './Single';

const RouteWrapper = (props) => {
  const params = useParams();
  return <Single params={params}{...props} />
}

export default class App extends Component {

  state = {
    searchInput: ''
  }
  inputHandler = (event) => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return (
      <BrowserRouter>
        <Header inputHandler={this.inputHandler} />
        <Routes>
          <Route path='/' element={<Main searchInput={this.state.searchInput} />} />
          <Route path='/:company' element={<RouteWrapper />} />
        </Routes>        
      </BrowserRouter>
    )
  }
}