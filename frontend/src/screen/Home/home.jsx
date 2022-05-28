import React from 'react';
import img1 from '../../assets/2.jpeg';
import { Link } from "react-router-dom";
import styles from './home.module.css';

const Home = () => {

  return (

    <section className='container'>
        <div className="row">
            <div className="col-md-4">
                  <div className="inner-card-main">
                      <img src={img1} alt="hotel-1" />
                      <h6>Hotel Name:</h6>
                      <h6>Per Day Price: </h6>
                      <Link to="detail.js">Hotel Detail</Link>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Home