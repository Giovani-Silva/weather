import React, { Component } from 'react';

import Spinner from './components/Spinner';
import Mobile from './components/Mobile';
import Display from './components/Display';
import StackBar from './components/StackBar';

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <Mobile />
        </header>
        <Display />
        <StackBar />
        {this.state.loading && <Spinner />}
      </div>
    );
  }
}

export default App;
