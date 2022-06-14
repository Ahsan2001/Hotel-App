import axios from "axios";
import React from "react";
import BASE_URI from "../core";

const TOKENtesting = () => {
    const createProduct = () => {
        axios
            .get(`${BASE_URI}/product`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };


    return (
        <div>
            <h1>TOKENtesting PAGE</h1>
            <button onClick={createProduct}>CREATE PRODUCT</button>
        </div>
    );
};

export default TOKENtesting;