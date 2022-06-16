import axios from "axios";
import BASE_URI from '../../core'
import ActionTypes from "../constant";

const GetHotels =  () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.GET_HOTEL_REQUEST,
        });

     axios.get(`${BASE_URI}/hotel`)
        .then(res => {
            dispatch({
                type: ActionTypes.GET_HOTEL_SUCCESS,
                payload: res.data.hotels,
            });
            console.log(res);
        })
        .catch(err => { 
            dispatch({
                type: ActionTypes.GET_HOTEL_FAIL,
                payload: err.message,
            })
        }
    )
}
}

export { GetHotels };