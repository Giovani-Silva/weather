import React, { Component } from 'react';

import Spinner from './components/Spinner';
import PopUp from './components/PopUp';

import Header from './components/Header';
import Display from './components/Display';
import StackBar from './components/StackBar';
import Days from './components/Days';

class App extends Component {
  state = {
    loading: true,
    page: 1,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <div className="dashboard">
            <Display />
            <StackBar />
          </div>
          <Days />
        </div>
        {this.state.loading && <Spinner />}
        {/* <PopUp /> */}
      </div>
    );
  }
}

export default App;
