import React from 'react';
import PropTypes from 'prop-types';
import './style/Navbar.css';

const Navbar = ({ themeSwitch, theme }) => (
  <nav className={theme === 'default' ? 'navbar df-nav' : 'navbar'}>
    <div className="container">
      <h1>Where in the world?</h1>
      {theme === 'default' && <h2 onClick={themeSwitch}>White Theme</h2>}
      {theme === 'white' && <h2 onClick={themeSwitch}>Default Theme</h2>}
    </div>

  </nav>
);
export default Navbar;

Navbar.propTypes = {
  theme: PropTypes.string,
  themeSwitch: PropTypes.func,
};
