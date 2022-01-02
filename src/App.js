import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';


export default class App extends Component {

  state = {
    searchInput: ''
  }
  inputHandler = (event) => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Header inputHandler={this.inputHandler} />
        <Main searchInput={this.state.searchInput} />
      </div>
    )
  }
}