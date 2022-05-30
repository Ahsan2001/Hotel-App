import React from 'react'
import { useNavigate } from 'react-router-dom'
import roomDetail from '../../assets/2.jpeg'

import styles from "./roomDetail.module.css"

const RoomDetail = () => {

    let navigate = useNavigate();
    const reserveRoom = () => {
        navigate("/Booking")
    }


  return (
    <React.Fragment>
        <section className={ `${styles.roomDetail} container`  }>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div  className={styles.innerImage}>
                            <img src={roomDetail} />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={styles.innerDetailRoom} >
                            <h2>Galaxy Inn Guest House</h2>
                            <h4> Service Offering </h4>
                            <ul>
                                <li>Free Wifi</li>
                                <li> Airport shuttle</li>
                                <li> Room service</li>
                                <li>Free parking</li>
                                <li>Family rooms</li>
                                <li> Exceptional breakfast</li>
                                <li>ATM and Currency Exchange</li>
                            </ul>

                              <button onClick={(e) => { reserveRoom()}}>Reserve Room</button>


                        </div>
                    </div>


                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default RoomDetail