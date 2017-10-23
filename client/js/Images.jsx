// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import axios from 'axios';

class Images extends Component {
  constructor () {
    super();

    this.state = {
      quote: []
    };
  }

  componentDidMount () {
    this.fetchQuote();
  }

  fetchQuote () {
    axios.get( `http://localhost:3001/api/cover_images.json` )
        .then(response => {
          this.setState({ quote: response.data });
        });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main_layout">
          {this.state.quote.map((idea) =>(<div className="main_gallery" key={idea.id} >
            <Link to={"/image/"+idea.id} key={idea.id}><img className="gallery" src={`${idea.title_thumb}`} alt='test'/></Link>
            </div>))}
        </div>
      </div>
    );
  }
}

export default Images;
