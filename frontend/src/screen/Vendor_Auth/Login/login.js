import axios from "axios";
import React, { useState } from "react";
import Loader from "../../components/Loader/loader";
import styles from './login.module.css'
import { Link } from 'react-router-dom'
import BASE_URI from "../../core";
import { toast } from "react-toastify";
const Login = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userData = {
      email, password
    }


    const loginUser = (e) => {
        setLoading(true)
        e.preventDefault();
        axios.post(`${BASE_URI}/VendorLogin`, userData)
            .then((res) => {
                setLoading(false)
                console.log(res)
                toast.success('SuccessFully Login')
            })
            .catch((err) => { 
                console.log(err)
                setLoading(false)
                toast.error('Invalid Credential !')
            });
        
        setEmail("");
        setPassword("");
    }

    return (
        <React.Fragment>
        <section className={styles.auth_account}>
            <div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                        <h1 className="text-center my-2">LOGIN</h1>
                        <form>
                            <input className="form-control my-3" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" />
                            <input className="form-control my-3" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            {loading ? <Loader /> : <button className={`btn btn-primary ${styles.booking_btn}`}   onClick={loginUser}>Login</button>}
                        </form>
                        <div className={styles.dont_have}>Dont Have a Account ? <Link to="/Signup">Create Account </Link></div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
};

export default Login;