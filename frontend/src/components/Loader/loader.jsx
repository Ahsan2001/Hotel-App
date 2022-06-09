import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from './loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader_main}>
      <Spinner animation="border" role="status" className={styles.for_height}></Spinner>
      <span>Please Wait Loading...</span>
    </div>
  )
}

export default Loader