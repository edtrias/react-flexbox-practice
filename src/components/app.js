import React from 'react';

import Nav from './nav';
import Subnav from './subnav';
import SecondNav from './second-nav';
import Preview from './preview';

function App() {
  return (
    <div id="container">
      <Nav />
      <Subnav />
      <SecondNav />
      <Preview />
    </div>
  )
}

export default App;
