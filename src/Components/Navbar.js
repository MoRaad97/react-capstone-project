import React from "react";
import './style/Navbar.css'

const Navbar = (props) => {
  return (
    <nav className={props.theme === "default" ? 'navbar df-nav' : 'navbar'}>
      <div className="container">
        <h1>Where in the world?</h1>
        {props.theme === "default" && <h2 onClick={props.themeSwitch}>White Theme</h2>}
        {props.theme === "white" && <h2 onClick={props.themeSwitch}>Default Theme</h2>}
      </div>

    </nav>
  )
}
export default Navbar