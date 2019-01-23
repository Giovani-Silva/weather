import React from 'react';
import Mobile from '../Mobile';

const Header = () => (
  <header className="header">
    <Mobile />
    <h1 className="location">São Paulo</h1>
    <div>
      <button className="btn__temp">C</button>
      <button className="btn__temp">F</button>
    </div>
  </header>
);

export default Header;
