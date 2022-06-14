import React from 'react'
import styles from './filter.module.css'

const Filters = () => {
  return (

    <React.Fragment>
        <div className={styles.filters}>
            <h2>Filters</h2>
            <h4>Rooms</h4>
            <h4>Price</h4>
        </div>

    </React.Fragment>
  )
}

export default Filters