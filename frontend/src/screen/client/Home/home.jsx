import React from 'react';
import { Link } from "react-router-dom";
import styles from './home.module.css';
import ProductCard from '../../../components/Product/productCard';
import MetaData from '../../../components/MetaData/title';
import Filters from '../../../components/Filters/filter';

const Home = () => {





  return (

    <React.Fragment>

    <MetaData title={"Welcome To SN "} />

     <section className={styles.homeBanner}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto" >
                <div className={styles.Home_inner_content} >
                    <h2>Welcome To Sn Hotel</h2>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti beatae, aut velit amet eos sunt quibusdam autem in ullam.</h2>
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
            <h1>Featured Hotels</h1>
            </div>


            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                    <Filters />
                </div>

                <div className="col-md-9 px-0">
                    <ProductCard sortBy="newest"/>
                </div>
              </div>
            </div>


         
        </div>
    </section>

    </React.Fragment>
  )
}


export default Home