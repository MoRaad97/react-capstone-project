import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './style/Popup.css';

const Popup = ({
  trigger = false, keyId = null, theme = 'default', closePopup,
}) => {
  const countries = useSelector((state) => state.countries);
  return trigger ? (
    <>
      {countries.map((country) => { // eslint-disable-line
        if (keyId === country.id) {
          return (
            <section className={theme === 'default' ? 'popup popup-df' : 'popup'} key={country.id}>
              <div className="container">
                <button
                  className={theme === 'default' ? 'close-btn close-btn-df' : 'close-btn'}
                  type="button"
                  onClick={() => closePopup()}
                  onKeyDown={() => closePopup()}
                >
                  &#8592; Back
                </button>
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
  ) : '';
};

export default Popup;

Popup.propTypes = {
  trigger: PropTypes.bool,
  keyId: PropTypes.string,
  closePopup: PropTypes.func,
  theme: PropTypes.string,
};

Popup.defaultProps = {
  theme: 'default',
  trigger: false,
  keyId: null,
  closePopup: undefined,
};
