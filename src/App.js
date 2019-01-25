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
    popup: false,
    city: 'São Bernardo do Campo,br',
    weather: null,
    forecast: null,
    error: null,
  };

  componentDidMount() {
    this.loadData('weather');
    this.loadData('forecast');
  }

  loadData = async (type = 'weather', city = this.state.city, units = 'metric', lang = 'pt') => {
    try {
      const { data } = await api.get(
        `${type}?appid=${APPID}&units=${units}&lang=${lang}&q=${city}`,
      );
      this.setState({ ...this.state, loading: false, [type]: data });
    } catch (err) {
      this.setState({
        ...this.state,
        error: 'Não foi possível encontrar a cidade',
        loading: false,
      });
    }
  };

  openForm = () => this.setState({ popup: !this.state.popup });

  setCity = async (city) => {
    await this.setState({
      ...this.state,
      city,
      loading: true,
      popup: !this.state.popup,
    });
    this.loadData('weather');
    this.loadData('forecast');
  };

  render() {
    const {
      loading, popup, weather, forecast,
    } = this.state;
    return (
      <Fragment>
        {loading && <Spinner />}
        {!loading
          && weather && (
            <div className="container">
              <Header city={weather} loadData={this.loadData} openForm={this.openForm} />
              <div className="content">
                <div className="dashboard">
                  <Display now={weather} />
                  <StackBar days={forecast} weather={weather}/>
                </div>
                <Days days={forecast} weather={weather} />
              </div>
              {popup && <PopUp closePopup={this.openForm} setCity={this.setCity} />}
            </div>
        )}
      </Fragment>
    );
  }
}

export default App;
