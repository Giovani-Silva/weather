import React, { Component, Fragment } from 'react';

import Spinner from './components/Spinner';
import PopUp from './components/PopUp';

import Header from './components/Header';
import Display from './components/Display';
import StackBar from './components/StackBar';
import Days from './components/Days';

const data = {
  list: [
    {
      dt: 1548223200,
      main: {
        temp: 21.91,
        temp_min: 20.29,
        temp_max: 21.91,
        pressure: 934.2,
        sea_level: 1028,
        grnd_level: 934.2,
        humidity: 97,
        temp_kf: 1.61,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva fraca',
          icon: '10n',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 2.56,
        deg: 126.503,
      },
      rain: {
        '3h': 0.02,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-01-23 06:00:00',
    },
    {
      dt: 1548234000,
      main: {
        temp: 22.06,
        temp_min: 20.86,
        temp_max: 22.06,
        pressure: 934.64,
        sea_level: 1028.59,
        grnd_level: 934.64,
        humidity: 95,
        temp_kf: 1.21,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva fraca',
          icon: '10d',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 2.37,
        deg: 118.503,
      },
      rain: {
        '3h': 0.09,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-01-23 09:00:00',
    },
    {
      dt: 1548244800,
      main: {
        temp: 25.74,
        temp_min: 24.94,
        temp_max: 25.74,
        pressure: 935.48,
        sea_level: 1029.18,
        grnd_level: 935.48,
        humidity: 80,
        temp_kf: 0.81,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva fraca',
          icon: '10d',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 1.97,
        deg: 114.501,
      },
      rain: {
        '3h': 0.035,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-01-23 12:00:00',
    },
    {
      dt: 1548255600,
      main: {
        temp: 29.91,
        temp_min: 29.5,
        temp_max: 29.91,
        pressure: 934.25,
        sea_level: 1027.47,
        grnd_level: 934.25,
        humidity: 76,
        temp_kf: 0.4,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva fraca',
          icon: '10d',
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 1.76,
        deg: 38.0007,
      },
      rain: {
        '3h': 1.35,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-01-23 15:00:00',
    },
    {
      dt: 1548266400,
      main: {
        temp: 28.27,
        temp_min: 28.27,
        temp_max: 28.27,
        pressure: 932.8,
        sea_level: 1025.84,
        grnd_level: 932.8,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'chuva moderada',
          icon: '10d',
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 1.76,
        deg: 104.506,
      },
      rain: {
        '3h': 6.295,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-01-23 18:00:00',
    },
    {
      dt: 1548277200,
      main: {
        temp: 27.08,
        temp_min: 27.08,
        temp_max: 27.08,
        pressure: 932.7,
        sea_level: 1025.92,
        grnd_level: 932.7,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva fraca',
          icon: '10d',
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 3.26,
        deg: 128.502,
      },
      rain: {
        '3h': 2.72,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-01-23 21:00:00',
    },
    {
      dt: 1548288000,
      main: {
        temp: 23.38,
        temp_min: 23.38,
        temp_max: 23.38,
        pressure: 934.2,
        sea_level: 1027.87,
        grnd_level: 934.2,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'céu claro',
          icon: '02n',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 3.16,
        deg: 120,
      },
      rain: {},
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-01-24 00:00:00',
    },
  ],
  city: {
    id: 3448439,
    name: 'São Paulo',
    coord: {
      lat: -23.5507,
      lon: -46.6334,
    },
    country: 'BR',
    population: 10021295,
  },
};

class App extends Component {
  state = {
    loading: true,
    page: 1,
    data,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    const {
      loading,
      data: { city, list },
    } = this.state;
    return (
      <Fragment>
        {loading && <Spinner />}
        {!loading && (
          <div className="container">
            <Header city={city} />
            <div className="content">
              <div className="dashboard">
                <Display now={list[0]} />
                <StackBar />
              </div>
              <Days />
            </div>
            {/* <PopUp /> */}
          </div>
        )}
      </Fragment>
    );
  }
}

export default App;
