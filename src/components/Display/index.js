import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ now: { main, wind, weather } }) => (
  <section className="display">
    <h2 className="hide">Informações de temperatura atual</h2>
    <div className="display__left">
      <div>{`${Math.trunc(main.temp_max)}º +`}</div>
      <div>{`${Math.trunc(main.temp_min)}º -`}</div>
    </div>
    <div className="display__middle">{`${Math.trunc(main.temp)}º`}</div>
    <div className="display__right">
      <div>
        <i className="wi wi-owm-957" />
        <span>{`${wind.speed} h`}</span>
      </div>
      <div>
        <i className="wi wi-owm-762" />
        <span>{`${main.humidity} %`}</span>
      </div>
      <div>
        <i className={`wi owm-${weather[0].icon}`} />
        <span>{`${weather[0].main}`}</span>
      </div>
    </div>
  </section>
);

Display.propTypes = {
  now: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
      humidity: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default Display;
