import axios from "axios";
import React, { useState } from "react";
import styles from './signup.module.css'
import { useNavigate } from "react-router-dom";
import Loader from "../../../../components/Loader/loader";
import BASE_URI from "../../../../core";
import { toast } from "react-toastify";


const VendorSignup = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [cnic, setCnic] = useState('');
    const [address, setAddress] = useState('');

    const [password, setPassword] = useState('');
    const userData = {
        name, phone, email, password, cnic, address
    }

    const createAccount = (e) => {
        setLoading(true)
        e.preventDefault();
        axios
            .post(`${BASE_URI}/VendorSignup`, userData)
            .then(
                (res) => {
                    setLoading(false)
                    console.log(res)
                    toast.success('SuccessFully Account Created')
                    navigate("/login")
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
            <section className={styles.auth_account}>
                <div className="container">
                    <div className="row">
                        <div className="col-8 m-auto">
                            <h1 className="text-center my-2">Register Here To Become a Member</h1>
                            <form>
                                <input className="form-control my-3" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name" />
                                <input className="form-control my-3" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" />
                                <input className="form-control my-3" type="number" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Enter Your Phone" />
                          
                          
                                <input className="form-control my-3" type="number" value={cnic} onChange={(e) => { setCnic(e.target.value) }} placeholder="Enter Your Cnic" />
                                <input className="form-control my-3" type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="Enter Complete Address" />
                             
                             
                             
                                <input className="form-control my-3" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" />
                                {loading ? <Loader /> : <button className={`btn btn-primary ${styles.booking_btn}`} onClick={createAccount}>Create Account</button>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default VendorSignup;