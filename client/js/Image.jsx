// @flow

import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class Image extends Component {
  state = {
    image: ''
  };

  componentDidMount () {
    this.fetchImage();
  }

  fetchImage () {
    axios.get( `http://localhost:3001/api/cover_images/${this.props.match.params.id}.json` )
        .then(response => {
          this.setState({ image: response.data.title_orig });
          console.log(response.data);
        });
  }

  render() {
    return (
      <div>
        <Header />
        <img className="centered" src={`${this.state.image}`} alt=''/>
      </div>
    );
  }
}

export default Image;
