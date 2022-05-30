import axios from "axios";
import ActionTypes from "../constant";

const action  = (username) => {
    return (dispatch) => {
        dispatch({
            // type: ActionTypes.,
        });

        // const obj = ;

        axios
            .get(`https:///${obj}`)
            .then((res) => {
                dispatch({
                    // type: ActionTypes.,
                    payload: res.data,
                });
            })
            .catch((err) =>
                dispatch({
                    // type: ActionTypes.,
                    payload: err.message,
                })
            );
    };
};

export { action  };