import React from 'react';
import PropTypes from 'prop-types';
import Mobile from '../Mobile';

const Header = ({ city }) => (
  <header className="header">
    <Mobile />
    <h1 className="location">{`${city.name} - ${city.country}`}</h1>
    <div>
      <button type="button" className="btn__temp">
        C
      </button>
      <button type="button" className="btn__temp">
        F
      </button>
    </div>
  </header>
);

Header.propTypes = {
  city: PropTypes.shape({
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
