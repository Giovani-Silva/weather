import React, { Component } from 'react';

import Spinner from './components/spinner';
import Mobile from './components/btnMobile';

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
        {this.state.loading && <Spinner />}
      </div>
    );
  }
}

export default App;
