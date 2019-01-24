import React from 'react';
import PropTypes from 'prop-types';

const setUnits = (units, city, loadData) => {
  loadData('weather', city, units);
  loadData('forecast', city, units);
};

const Header = ({ city, loadData, openForm }) => (
  <header className="header">
    <button type="button" className="btn--mobile" onClick={() => openForm()}>
      <div className="mobile__bar1" />
      <div className="mobile__bar2" />
    </button>
    <h1 className="location">{`${city.name} - ${city.sys.country}`}</h1>
    <div>
      <button
        type="button"
        className="btn__temp"
        onClick={() => setUnits('metric', `${city.name},${city.sys.country}`, loadData)}
      >
        C
      </button>
      <button
        type="button"
        className="btn__temp"
        onClick={() => setUnits('imperial', `${city.name},${city.sys.country}`, loadData)}
      >
        F
      </button>
    </div>
  </header>
);

Header.propTypes = {
  loadData: PropTypes.func.isRequired,
  openForm: PropTypes.func.isRequired,
  city: PropTypes.shape({
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
    name: PropTypes.string,
  }).isRequired,
};

export default Header;
