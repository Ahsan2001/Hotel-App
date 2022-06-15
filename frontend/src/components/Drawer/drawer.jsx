import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './drawer.module.css'
import { Col} from 'react-bootstrap';

const Drawer = () => {
    let activeStyle = {
        background: "#000",
        width: "100%",
        textAlign: "center"
    }
  return (
    <React.Fragment>
      <Col xs={2} className="px-0">
        <nav className={styles.sidebarMain}>
            <NavLink to="../admin/dashboard" style={({ isActive }) => isActive ? activeStyle : undefined}>Dashboard</NavLink>
            <NavLink to="../admin/create" style={({ isActive }) => isActive ? activeStyle : undefined}>Create Room</NavLink>
            <NavLink to="../admin/edit" style={({ isActive }) => isActive ? activeStyle : undefined}>Edit Room</NavLink>
            <NavLink to="../admin/delete" style={({ isActive }) => isActive ? activeStyle : undefined}>Delete Room </NavLink>
            <NavLink to="../" style={({ isActive }) => isActive ? activeStyle : undefined  }>Logout</NavLink>
        </nav>
      </Col>
    </React.Fragment>
  )
}

export default Drawer