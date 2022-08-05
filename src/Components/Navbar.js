import React from 'react';
import PropTypes from 'prop-types';
import './style/Navbar.css';

const Navbar = ({ themeSwitch, theme = 'default' }) => (
  <nav className={theme === 'default' ? 'navbar df-nav' : 'navbar'}>
    <div className="container">
      <h1>Where in the world?</h1>
      {theme === 'default' && <div onClick={themeSwitch} onKeyDown={themeSwitch} role="button" tabIndex={0}>White Theme</div>}
      {theme === 'white' && <div onClick={themeSwitch} onKeyDown={themeSwitch} role="button" tabIndex={-1}>Default Theme</div>}
    </div>

  </nav>
);
export default Navbar;

Navbar.propTypes = {
  theme: PropTypes.string,
  themeSwitch: PropTypes.func,
};

Navbar.defaultProps = {
  theme: 'default',
  themeSwitch: undefined,
};
