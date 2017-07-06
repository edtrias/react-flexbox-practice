import React from 'react';

import Nav from './nav';
import Subnav from './subnav';
import SecondNav from './second-nav';
import Preview from './preview';
import News from './news';

function App() {
  return (
    <div id="container">
      <Nav />
      <Subnav />
      <SecondNav />
      <Preview />
      <News />
    </div>
  )
}

export default App;
