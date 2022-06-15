import axios from "axios";
import React, { useState } from "react";
import styles from './signup.module.css'
import { useNavigate } from "react-router-dom";
import Loader from "../../../../components/Loader/loader";
import BASE_URI from "../../../../core";
import { toast } from "react-toastify";


const Signup = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userData = {
        name, phone, email, password
    }

    const createAccount = (e) => {
        setLoading(true)
        e.preventDefault();
        axios
            .post(`${BASE_URI}/signup`, userData)
            .then(
                (res) => {
                    if (res.data.status) {
                    setLoading(false)
                    console.log(res)
                    toast.success('SuccessFully Account Created')
                    navigate("/login")
                }

                else{
                        toast.error('please fill the form correctly')
                        setLoading(false)
                }
            
                })
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
                            <h1 className="text-center my-2">SIGN UP</h1>
                            <form>
                                <input className="form-control my-3" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter name" />
                                <input className="form-control my-3" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                                <input className="form-control my-3" type="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="phone" />
                                <input className="form-control my-3" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password" />
                                {loading ? <Loader /> : <button className={`btn btn-primary ${styles.booking_btn}`} onClick={createAccount}>Register Now</button>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Signup;