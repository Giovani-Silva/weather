import React from 'react';
import PropTypes from 'prop-types';
import Mobile from '../Mobile';

const setUnits = (units, city, loadData) => {
  loadData('weather', city, units);
  loadData('forecast', city, units);
};

const Header = ({ city, loadData }) => (
  <header className="header">
    <Mobile />
    <h1 className="location">{`${city.name} - ${city.sys.country}`}</h1>
    <div>
      <button
        type="button"
        className="btn__temp"
        onClick={() => setUnits('metric', city.name, loadData)}
      >
        C
      </button>
      <button
        type="button"
        className="btn__temp"
        onClick={() => setUnits('imperial', city.name, loadData)}
      >
        F
      </button>
    </div>
  </header>
);

Header.propTypes = {
  loadData: PropTypes.func.isRequired,
  city: PropTypes.shape({
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
    name: PropTypes.string,
  }).isRequired,
};

export default Header;
