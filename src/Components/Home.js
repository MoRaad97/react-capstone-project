import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/Home.css';
/* tslint:disable: array-callback-return consistent-return  */

const Home = ({ theme = 'default', handleName }) => {
  const [State, setState] = useState({
    filter: 'All',
    search: '',
  });
  const [visible, setVisible] = useState(false);

  const countries = useSelector((state) => state.countries);

  const handleFilter = (e) => {
    const { value } = e.target;
    setState({ ...State, filter: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    let newValue;
    if (value) {
      newValue = value.trim().toLowerCase();
    } else {
      newValue = '';
    }
    setState(
      { ...State, search: newValue },
    );
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={theme === 'default' ? 'home home-df' : 'home'}>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="SearchBar-container" onChange={handleSearch} onBlur={handleSearch}>
            <input type="search" placeholder="Search for a country" />
          </div>
          <div className="filter-container">
            <select name="Regions" onChange={handleFilter}>
              <option value="All">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </form>
        <button
          type="button"
          className={theme === 'default' ? 'scroll-up' : 'scroll-up scroll-up-white'}
          style={{ display: visible ? 'inline' : 'none' }}
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
        >
          &#8593;
        </button>
        <div className="cards-container">
          {countries.map((country) => { // eslint-disable-line
            if (State.filter === country.region) {
              if (State.search === '') {
                return (
                  <div
                    className={theme === 'default' ? 'card card-df' : 'card'}
                    key={country.id}
                    id={country.id}
                  >
                    { /* eslint-disable */
                    }
                    <Link to={`${country.name}`}>
                      <img src={country.image} alt={country.name} onClick={handleName} />
                    </Link>
                    <div className="data-container">
                      <h2>{country.name}</h2>
                      <ul>
                        <li>
                          Population:
                          {country.population}
                        </li>
                        <li>
                          Region:
                          {country.region}
                          {' '}

                        </li>
                        <li>
                          Capital:
                          {country.capital}
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              } if (country.name.toLowerCase().includes(State.search)) {
                return (
                  <div
                    className={theme === 'default' ? 'card card-df' : 'card'}
                    key={country.id}
                    id={country.id}
                  >
                    <Link to={`${country.name}`}>
                      <img src={country.image} alt={country.name} onClick={handleName} />
                    </Link>
                    <div className="data-container">
                      <h2>{country.name}</h2>
                      <ul>
                        <li>
                          Population:
                          {country.population}
                        </li>
                        <li>
                          Region:
                          {country.region}
                          {' '}

                        </li>
                        <li>
                          Capital:
                          {country.capital}
                        </li>
                      </ul>
                    </div>

                  </div>
                );
              }
            } else if (State.filter === 'All') {
              if (State.search === '') {
                return (
                  <div
                    className={theme === 'default' ? 'card card-df' : 'card'}
                    key={country.id}
                    id={country.id}
                  >
                    <Link to={`${country.name}`}>
                      <img src={country.image} alt={country.name} onClick={handleName} />
                    </Link>
                    <div className="data-container">
                      <h2>{country.name}</h2>
                      <ul>
                        <li>
                          Population:
                          {country.population}
                        </li>
                        <li>
                          Region:
                          {country.region}
                          {' '}

                        </li>
                        <li>
                          Capital:
                          {country.capital}
                        </li>
                      </ul>
                    </div>

                  </div>
                );
              } if (country.name.toLowerCase().includes(State.search)) {
                return (
                  <div
                    className={theme === 'default' ? 'card card-df' : 'card'}
                    key={country.id}
                    id={country.id}
                  >
                    <Link to={`${country.name}`}>
                      <img src={country.image} alt={country.name} onClick={handleName} />
                    </Link>
                    <div className="data-container">
                      <h2>{country.name}</h2>
                      <ul>
                        <li>
                          Population:
                          {country.population}
                        </li>
                        <li>
                          Region:
                          {country.region}
                          {' '}

                        </li>
                        <li>
                          Capital:
                          {country.capital}
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;

Home.propTypes = {
  theme: PropTypes.string,
  handleName: PropTypes.func,
};

Home.defaultProps = {
  theme: 'default',
  handleName: undefined,
};
