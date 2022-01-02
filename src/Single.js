import axios from 'axios';
import React, { Component } from 'react'
import Header from './Header';

export default class Single extends Component {

  state = {
    data: '',
    isLoading: true
  }
  componentDidMount() {
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_name=${this.props.params.company}`)
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        console.log(this.state.data);
      });
  }
  render() {
    return (
      <>
      <div className='single'>
        {this.props.params.company}
      </div>
      </>
    )
  }
}

