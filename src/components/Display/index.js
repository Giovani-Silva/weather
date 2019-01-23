import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ now: { main, wind } }) => (
  <section className="display">
    <div className="display__left">
      <div>{`${Math.trunc(main.temp_max)}º +`}</div>
      <div>{`${Math.trunc(main.temp_min)}º -`}</div>
    </div>
    <div className="display__middle">{`${Math.trunc(main.temp)}º`}</div>
    <div className="display__right">
      <div>
        <i className="wi wi-owm-957" />
        <span>{wind.speed}</span>
      </div>
      <div>
        <i className="wi wi-owm-762" />
        <span>{main.humidity}</span>
      </div>
      <div>
        <i className="wi wi-owm-906" />
        <span>{Math.trunc(main.pressure)}</span>
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
      pressure: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
  }).isRequired,
};

export default Display;
