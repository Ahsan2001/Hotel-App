import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import BASE_URI from '../../core';
import styles from './product.module.css'


const ProductCard = () => {

    let [productObj, setProductObj] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        console.log("get data success")
        GetData();
    }, [])


    const GetData = async () => {

   

        try {
            await axios.get(`${BASE_URI}/hotel`)
            .then(res => {
                const product = res.data.hotels
                setProductObj(product)
            })
            .catch(err =>{console.log(err)})
        } 

        catch (error) {
            console.log("not getting Data  ERROR", error)
        }
    }




  return (

    <div className='row'>
          {productObj.map((product, ind) => {
        return <div className='col-md-4' key={ind}>
            <div className={styles.inner_card_main}>

                <h6></h6>
                <h6>Price $ <span></span> </h6>

                    {console.log(product)}

                <button onClick={() => { navigate(`/Room-Detail/${product.id}`) }}>View Detail</button>
            </div>
        </div>
        })}
    </div>

  )
}

export default ProductCard