import React, { Component } from 'react';

import Spinner from './components/spinner';
class App extends Component {
  openMenu = () => {
    console.log('open list');
  };
  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="btn--mobile" onClick={() => this.openMenu()}>
            <div className="mobile__bar1" />
            <div className="mobile__bar2" />
            <div className="mobile__bar3" />
          </div>
        </header>
        <Spinner />
      </div>
    );
  }
}

export default App;
