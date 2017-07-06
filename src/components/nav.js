import React from 'react';

function Nav() {
  return(
    <div id="nav-wrapper">
      <div id="menu">
        <ul>
          <li><a href="">One</a></li>
          <li><a href="">Two</a></li>
          <li><a href="">Three</a></li>
          <li><a href="">Four</a></li>
        </ul>
      </div>
      <div id="search">
        <input type="text" placeholder="Search" />
        <button className="btn">Search</button>
      </div>
    </div>
  )
}

export default Nav;
