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
    searchInput: '',
    searchOff: false
  }
  inputHandler = (event) => {
    this.setState({searchInput: event.target.value})
  }
  searchOffHandler = () => {
    if (this.state.searchOff === false) {
      this.setState({ searchOff: true })
    } else {
      this.setState({ searchOff: false })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header inputHandler={this.inputHandler} searchOff={this.state.searchOff} />
        <Routes>
          <Route path='/' element={<Main searchInput={this.state.searchInput} searchOffHandler={this.searchOffHandler}/>} />
          <Route path='/:company' element={<RouteWrapper searchOffHandler={this.searchOffHandler} />} />
        </Routes>        
      </BrowserRouter>
    )
  }
}