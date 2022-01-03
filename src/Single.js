import axios from 'axios';
import React, { Component } from 'react'
import Button from './Button';

export default class Single extends Component {

  state = {
    data: '',
    isLoading: true
  }
  componentDidMount() {
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_name=${this.props.params.company}`)
      .then((res) => {
        this.setState({ data: res.data[0], isLoading: false });
        console.log(this.state.data);
      });
  }
  infoCheck = (data) => {
    if (data === null) {
      return 'No information';
    }
    return data;
  }
  
  render() {
    if (this.state.isLoading === true) {
      return (
        <div className='singleWrapper'>
          <div class="lds-dual-ring"></div>
        </div>
      )
    } else {
      return (
        <div className='singleWrapper'>
        <div className='single'>
            <h1>Detail information:</h1>
            <p>Name: {this.infoCheck(this.state.data.name)}</p>
            <p>Brewery type: {this.infoCheck(this.state.data.brewery_type)}</p>
            <p>Street: {this.infoCheck(this.state.data.street)}</p>
            <p>Address 2: {this.infoCheck(this.state.data.address_2)}</p>
            <p>Address 3: {this.infoCheck(this.state.data.address_3)}</p>
            <p>City: {this.infoCheck(this.state.data.city)}</p>
            <p>County province: {this.infoCheck(this.state.data.county_province)}</p>
            <p>Postal code: {this.infoCheck(this.state.data.postal_code)}</p>
            <Button class='goBack' link='/' name='Go back' to='/' clickHandler={this.props.searchOffHandler} />
        </div>
        </div>
      )
    }

  }
}

