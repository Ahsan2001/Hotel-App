import axios from 'axios';
import React, {  useState } from 'react';
import BASE_URI from '../core';

export const MainContext = React.createContext()
 

const Context = ({ children }) => {

 
    
    
    let [productObj, setProductObj] = useState([]);
    let [productDetail, setProductDetail] = useState("");


    const GetData = async () => {
        try {
   
            await axios.get(`${BASE_URI}/hotel`)
                .then(res => {
                    const product = res.data.hotels
                    setProductObj(product)
                })
                .catch(err => { console.log(err) })
        }
        catch (error) {
            console.log("not getting Data  ERROR", error)
        }
    }

    const GetDetailData = async (data, err) => {

        try {
            await axios.get(`${BASE_URI}/hotel/${data}`)
                .then(res => {
                    const pD = res.data
                    setProductDetail(pD)
                    console.log(productDetail)
                })
                .catch(err => { console.log(err) })
        }

        catch (error) {
            console.log("not getting Data  ERROR", error)
        }
    }








return (
    <MainContext.Provider value={{ productObj, setProductObj, productDetail, setProductDetail,GetData, GetDetailData }}>
        {children}
    </MainContext.Provider>
)

}





export default Context;