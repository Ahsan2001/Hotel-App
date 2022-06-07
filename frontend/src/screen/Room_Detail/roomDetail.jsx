import axios from 'axios';
import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MetaData from '../../components/MetaData/title';
import BASE_URI from '../../core';
import styles from "./roomDetail.module.css"
import { MainContext } from '../../contextApi/context';



const RoomDetail = ( ) => {

    const { productObj, GetDetailData  } = useContext(MainContext)

    const navigate = useNavigate();

    useEffect(() => {
        console.log("get data success")
        GetDetailData()
    }, [])



    console.log(productObj[0].data)





    const reserveRoom = () => {
        navigate("/Booking")
    }


  return (
    <React.Fragment>

        <MetaData title={"Room Detail "} />

        <section className={ `${styles.roomDetail} container`  }>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div  className={styles.innerImage}>
                            {/* <img src={productObj.images[0].url} /> */}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={styles.innerDetailRoom} >
                              <h2>{productObj.name}</h2>
                            {/* <h6>{productObj.description}</h6>
                            <h2>{value}</h2> */}
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