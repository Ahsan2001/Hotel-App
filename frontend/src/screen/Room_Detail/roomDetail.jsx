import React, { useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MetaData from '../../components/MetaData/title';
import styles from "./roomDetail.module.css"
import { MainContext } from '../../contextApi/context';



const RoomDetail = ( ) => {

    const { productObj, productDetail, GetDetailData } = useContext(MainContext)
    const location = useLocation();
    const detail = location.state.id
   
    const navigate = useNavigate();

    useEffect(() => {
        console.log("get data success")
        GetDetailData(detail , productObj)
    }, [])


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
                            {/* <img src={productDetail.images[0].url} /> */}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={styles.innerDetailRoom} >
                              <h2>{productDetail.name}</h2>
                             <h6>{productDetail.description}</h6>
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