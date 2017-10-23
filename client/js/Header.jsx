// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  let utilSpace;

  utilSpace = (
    <h2>
      <Link to="/">
        Back
      </Link>
    </h2>
  );

  return (
    <header>
      <h1><Link to="/">Images</Link></h1>
      <h1><Link to="/about">About</Link></h1>
      {utilSpace}
    </header>
  );
};

export default Header;
