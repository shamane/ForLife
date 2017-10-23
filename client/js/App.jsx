// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';

import Images from './Images';
import Image from './Image';
import About from './About';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Images} />
        <Route path="/about" component={About} />
        <Route path="/image/:id" component={props => <Image {...props} />} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
