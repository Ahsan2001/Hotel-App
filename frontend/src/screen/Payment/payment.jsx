import axios from "axios";
import React, { useState } from "react";
import styles from './payment.module.css'
import Loader from "../../components/Loader/loader";
import BASE_URI from "../../core";
import { toast } from "react-toastify";
import MetaData from "../../components/MetaData/title";


const Payment = () => {
    const [loading, setLoading] = useState(false);
    const [bankName, setBankName] = useState("");
    const [credit, setCredit] = useState("");
    const [code, setCode] = useState("");
    const [expiry, setExpiry] = useState("");

  
    const PaymentData = {
            bankName, credit, code, expiry
    }

    const createAccount = (e) => {
        setLoading(true)
        e.preventDefault();
        axios
            .post(`${BASE_URI}/payment`, PaymentData)
            .then(
                (res) => {
                    setLoading(false)
                    console.log(res)
                    toast.success('Thank you')

                }
            )
            .catch(
                (err) => {
                    console.log(err)
                    toast.error('please fill the form correctly')
                    setLoading(false)
                }
            );
    }

    return (
        <React.Fragment>
            <MetaData title={"Payment Now "} />
            <section className={styles.payment_main}>
                <div className="container">
                    <div className="row">
                        <div className="col-8 m-auto">
                            <h1 className={` ${styles.paymentHeading}  text-center my-2`}>PAYMENT NOW TO <span className={styles.confirm}>CONFIRM</span> BOOKING</h1>
                            <form>
                                <input className="form-control my-3" type="text" value={bankName} onChange={(e) => { setBankName(e.target.value) }} placeholder="Enter Bank Name" />
                                <input className="form-control my-3" type="number" value={credit} onChange={(e) => { setCredit(e.target.value) }} placeholder="Enter Credit Card Number" />
                                <input className="form-control my-3" type="number" value={code} onChange={(e) => { setCode(e.target.value) }} placeholder="Card Code" />
                                <input className="form-control my-3" type="number" value={expiry} onChange={(e) => { setExpiry(e.target.value) }} placeholder="Expiry Date" />
                                {loading ? <Loader /> : <button className={`btn btn-primary ${styles.booking_btn}`} onClick={createAccount}>Payment Now</button>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Payment;