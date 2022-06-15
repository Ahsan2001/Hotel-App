import React, { useContext, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './product.module.css'
import Button from '@mui/material/Button';
import { MainContext } from '../../contextApi/context';


const ProductCard = (  ) => {


    const {productObj, GetData} = useContext(MainContext)
    const navigate = useNavigate();
   

    const viewDetail = (product) => {
        navigate(`Room-Detail/${product._id}`,
         { state: {   id: product._id  } })
    }


    useEffect(() => {
        console.log("get data success")
        GetData();
    }, [])


  return (

    <div className='row'>
        {productObj.map((product, ind) => {
        return <div className='col-md-4' key={ind}>
            <div className={styles.inner_card_main}>
                <img src={product.images[0].url} />
                <h6> {product.name}</h6>
                <h6>Per Day Price: Rs <span>{product.price} </span> </h6>
                <h6>Rooms: <span>{product.room} </span> </h6>
                <Button variant="contained" onClick={() => {viewDetail(product) }}>View Detail</Button>
            </div>
        </div>
        })}
    </div>
  )
}

export default ProductCard




    