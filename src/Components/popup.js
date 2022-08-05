import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/Popup.css';

const Popup = ({ name, theme = 'default' }) => {
  const countries = useSelector((state) => state.countries);
  return (
    <>
      {countries.map((country) => { // eslint-disable-line
        if (name === country.name) {
          return (
            <section className={theme === 'default' ? 'popup popup-df' : 'popup'} key={country.id}>
              <div className="container">
                <Link to="/">
                  <button
                    className={theme === 'default' ? 'close-btn close-btn-df' : 'close-btn'}
                    type="button"
                  >
                    &#8592; Back
                  </button>
                </Link>
                <div className={theme === 'default' ? 'popup-card popup-card-df' : 'popup-card'}>
                  <img src={country.image} alt={country.name} />
                  <div className="popup-data-container">
                    <h2>{country.name}</h2>
                    <ul>
                      <span>
                        <li>
                          Population:
                          {country.population}
                        </li>
                        <li>
                          nativeName:
                          {country.nativeName}
                        </li>
                        <li>
                          Capital:
                          {country.capital}
                        </li>
                        <li>
                          Region:
                          {country.region}
                          {' '}

                        </li>
                        <li>
                          subregion:
                          {country.subregion}
                        </li>
                      </span>
                      <span>
                        <li>
                          latlng:
                          {country.latlng}
                        </li>
                        <li>
                          languages:
                          {country.languages}
                        </li>
                        <li>
                          Top Level domain:
                          {country.tld}
                        </li>
                      </span>
                    </ul>
                  </div>

                </div>
              </div>
            </section>
          );
        }
      })}
    </>
  );
};

export default Popup;

Popup.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string,
};

Popup.defaultProps = {
  theme: 'default',
  name: null,
};
