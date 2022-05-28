import React from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap'
import { FcHome } from "react-icons/fc";


const Header = () => {
  return (
    <Navbar className={styles.header_main} expand="lg">
      <Navbar.Brand href="#home" className={`${styles.navbar_main}  m-0`}> <FcHome />  BMJ Hotel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navbar_menu_main}>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Login">Login</Link></li>
          </ul>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header