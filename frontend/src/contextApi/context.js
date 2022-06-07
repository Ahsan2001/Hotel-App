import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import BASE_URI from '../core';

export const MainContext = React.createContext()
 


const Context = ({ children }) => {
    let [productObj, setProductObj] = useState([]);




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




    const GetDetailData = async () => {
        try {
            await axios.get(`${BASE_URI}/hotel/${productObj[0]._id}`)
                .then(res => {
                 console.log(res)
                 
                })
                .catch(err => { console.log(err) })
        }

        catch (error) {
            console.log("not getting Data  ERROR", error)
        }
    }



return (
    <MainContext.Provider value={{ productObj, setProductObj, GetData, GetDetailData }}>
        {children}
    </MainContext.Provider>
)

}





export default Context;