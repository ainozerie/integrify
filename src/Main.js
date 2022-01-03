import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card';


export default class Main extends Component {

  state = {
    data: '',
    isLoading: true
  }
  componentDidMount() {
    axios
      .get('https://api.openbrewerydb.org/breweries')
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
      });
  }
  render() {
    const breweries = [];
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].name.toLowerCase().includes(this.props.searchInput.toLowerCase())) {
        breweries.push(this.state.data[i]);
      }
    }
    const breweriesToDisplay = breweries.map((brewery, i) => {
      return <Card {...brewery} key={i} clickHandler={this.props.searchOffHandler}/>
    });

    if (this.state.isLoading === true) {
      return (
        <div className='singleWrapper'>
          <div class="lds-dual-ring"></div>
        </div>
      )
    } else {
      return (
        <main>
          {breweriesToDisplay}
        </main>
      )
    }

  }
}
