import React from 'react'
import { Link } from 'react-router-dom'
import styles from './notfound.module.css'
const NotFound = () => {
  return (
    <>
    <section className={styles.NotFound}>
       <h1>404 PAGE NOT FOUND </h1>
      <Link to="/">Go Back to Home Page </Link>
       
    </section>
    </>
  )
}

export default NotFound