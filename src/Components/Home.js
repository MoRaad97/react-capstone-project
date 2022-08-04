import React, { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "./popup";
import './style/Home.css'

const Home = (props) => {

  const [State, setState] = useState({
    filter: 'All',
    search: '',
    popup: false,
    keyId: null,
  })
  const [visible, setVisible] = useState(false)

  const countries = useSelector((state) => state.countries)

  const handleFilter = (e) => {
    const { value } = e.target
    setState({ ...State, filter: value });
  }

  const openPopup = (e) => {
    if (e.target.hasAttribute('alt')) {
      setState({ ...State, popup: true, keyId: e.target.parentElement.id });
    }
  }

  State.popup ? document.body.style.overflow = "hidden"
    : document.body.style.overflow = "auto"


  const closePopup = (e) => {
    setState({ ...State, popup: false });
  }

  const handleSearch = (e) => {
    const { value } = e.target;
    let newValue;
    if (value) {
      newValue = value.trim().toLowerCase()
    } else {
      newValue = ''
    }
    setState(
      { ...State, search: newValue }
    )
  }



  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true)
    }
    else if (scrolled <= 1000) {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <section className={props.theme === "default" ? 'home home-df' : 'home'}>
      <Popup trigger={State.popup} keyId={State.keyId} closePopup={closePopup} theme={props.theme} />
      <div className="container">
        <form action="">
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
        <button className={props.theme === "default" ? 'scroll-up' : 'scroll-up scroll-up-white'} style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}>&#8593;</button>
        <div className="cards-container">
          {countries.map((country) => {
            if (State.filter === country.region) {
              if (State.search === '') {
                return (
                  <div className={props.theme === "default" ? 'card card-df' : 'card'}
                    key={country.id}
                    id={country.id}
                    onClick={openPopup} >
                    <img src={country.image} alt={country.name} />
                    <div className="data-container">
                      <h2>{country.name}</h2>
                      <ul>
                        <li>Population: {country.population}</li>
                        <li>Region: {country.region} </li>
                        <li>Capital: {country.capital}</li>
                      </ul>
                    </div>
                  </div>
                )
              } else if (country.name.toLowerCase().includes(State.search)) {
                return (
                  <div className={props.theme === "default" ? 'card card-df' : 'card'}
                    key={country.id}
                    id={country.id}
                    onClick={openPopup} >
                    <img src={country.image} alt={country.name} />
                    <div className="data-container">
                      <h2>{country.name}</h2>
                      <ul>
                        <li>Population: {country.population}</li>
                        <li>Region: {country.region} </li>
                        <li>Capital: {country.capital}</li>
                      </ul>
                    </div>

                  </div>
                )
              }
            } else if (State.filter === 'All') {
              if (State.search === '') {
                return (
                  <div className={props.theme === "default" ? 'card card-df' : 'card'}
                    key={country.id}
                    id={country.id}
                    onClick={openPopup} >
                    <img src={country.image} alt={country.name} />
                    <div className="data-container">
                      <h2>{country.name}</h2>
                      <ul>
                        <li>Population: {country.population}</li>
                        <li>Region: {country.region} </li>
                        <li>Capital: {country.capital}</li>
                      </ul>
                    </div>

                  </div>
                )
              } else if (country.name.toLowerCase().includes(State.search)) {
                return (
                  <div className={props.theme === "default" ? 'card card-df' : 'card'}
                    key={country.id}
                    id={country.id}
                    onClick={openPopup} >
                    <img src={country.image} alt={country.name} />
                    <div className="data-container">
                      <h2>{country.name}</h2>
                      <ul>
                        <li>Population: {country.population}</li>
                        <li>Region: {country.region} </li>
                        <li>Capital: {country.capital}</li>
                      </ul>
                    </div>
                  </div>
                )
              }
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Home