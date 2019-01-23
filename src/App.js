import React, { Component, Fragment } from 'react';

import api, { APPID } from './services/api';

import Spinner from './components/Spinner';
import PopUp from './components/PopUp';

import Header from './components/Header';
import Display from './components/Display';
import StackBar from './components/StackBar';
import Days from './components/Days';

class App extends Component {
  state = {
    loading: true,
    weather: null,
    forecast: null,
  };

  componentDidMount() {
    this.loadData('weather');
    this.loadData('forecast');
  }

  loadData = async (
    type = 'weather',
    units = 'metric',
    lang = 'pt',
    city = 'São Bernardo do Campo, br',
  ) => {
    const { data } = await api.get(`${type}?appid=${APPID}&units=${units}&lang=${lang}&q=${city}`);

    if (data) this.setState({ ...this.state, loading: false, [type]: data });
  };

  render() {
    const { loading, weather, forecast } = this.state;
    return (
      <Fragment>
        {loading && <Spinner />}
        {!loading
          && weather && (
            <div className="container">
              <Header city={weather} />
              <div className="content">
                <div className="dashboard">
                  <Display now={weather} />
                  <StackBar />
                </div>
                <Days days={forecast} />
              </div>
              {/* <PopUp /> */}
            </div>
        )}
      </Fragment>
    );
  }
}

export default App;
