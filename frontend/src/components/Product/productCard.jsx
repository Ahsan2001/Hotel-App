import React, { useContext, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './product.module.css'
import { MainContext } from '../../contextApi/context';


const ProductCard = (  ) => {


    const {productObj, GetData} = useContext(MainContext)
    const navigate = useNavigate();
   

    const viewDetail = (product) => {
        navigate(`Room-Detail/${product._id}`, { state: {   id: product._id  } })
    }


    useEffect(() => {
        console.log("get data success")
        GetData();
        // GetDetailData()
    }, [])









  return (

    <div className='row'>
        {productObj.map((product, ind) => {
        return <div className='col-md-4' key={ind}>
            <div className={styles.inner_card_main}>
                <img src={product.images[0].url} />
                <h6> {product.name}</h6>
                <h6>Price $ <span> {product.price} </span> </h6>
                <button onClick={() => { 
                    viewDetail(product)
                }}>View Detail</button>
            </div>
        </div>
        })}
    </div>
  )
}

export default ProductCard




    