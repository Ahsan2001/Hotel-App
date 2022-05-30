import React from 'react';
import img1 from '../../assets/2.jpeg';
import { Link } from "react-router-dom";
import styles from './home.module.css';

const Home = () => {





  return (

    <React.Fragment>

     <section className={styles.homeBanner}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto" >
                <div className={styles.Home_inner_content} >
                    <h2>Welcome To Sn Hotel</h2>
                    <h2>Where customer satisfaction is a philosophy</h2>
                    <h2>Book Now And Get <span className={styles.discount}> 10% Discount </span></h2>
                    <div className={styles.findHotelBtn}> <Link to="/Find-Hotel">Find Hotel </Link></div>
                </div> 
            </div>
          </div>
        </div>
    </section>








    <section className={` ${styles.featuredHotel}  container`}>
        <div className="row">
            <div className="col-md-12">
                <h1>Available Hotels</h1>
            </div>


            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  filters Options
                </div>

                <div className="col-md-9 px-0">
                  <div className="row">
                      <div className="col-md-4">
                            <div className={styles.inner_card_main}>
                                <img src={img1} alt="hotel-1" />
                                <h6>Hotel Name:</h6>
                                <h6>Per Day Price: <span className={styles.price}> $9000 </span></h6>
                                <div className={styles.booking_btn}>
                                <Link to="/Room-Detail">Room Detail</Link>
                                </div>                        
                            </div>
                      </div>
                  </div>
                </div>










              </div>
            </div>


         
        </div>
    </section>

    </React.Fragment>
  )
}


export default Home