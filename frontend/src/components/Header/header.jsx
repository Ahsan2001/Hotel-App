import React from 'react'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap'
import logo from "../../assets/logo.png";


const Header = () => {




  let activeStyle = {
    fontWeight: "400",
}








  return (
    <div className={styles.Header_main}>
      <Navbar className={styles.header_body} expand="lg">
        <Navbar.Brand className={`${styles.navbar_main}  m-0`}> <img src={logo}  /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbar_menu_main}>
            <ul>
              <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined  }>Home</NavLink></li>
              <li><NavLink to="/Find-Hotel" style={({ isActive }) => isActive ? activeStyle : undefined  }>Find Hotel</NavLink></li>
              <li><NavLink to="/Become-A-Vendor" style={({ isActive }) => isActive ? activeStyle : undefined  }>Become a Vender</NavLink></li>
              <li><NavLink to="/Login" style={({ isActive }) => isActive ? activeStyle : undefined  }>Login </NavLink></li>
              {/* <li><NavLink to="/Signup" style={({ isActive }) => isActive ? activeStyle : undefined  }>Register</NavLink></li> */}
            </ul>
        </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default Header