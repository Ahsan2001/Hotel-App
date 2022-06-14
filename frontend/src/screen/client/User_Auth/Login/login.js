import axios from "axios";
import React, { useState } from "react";
import Loader from "../../../../components/Loader/loader";
import styles from './login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import BASE_URI from "../../../../core";
import TextField from '@mui/material/TextField';
import { toast } from "react-toastify";
import { Box } from '@mui/system';
const Login = () => {


    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const userData = {
      email, password
    }


    const loginUser = (e) => {
        setLoading(true)
        e.preventDefault();
        axios.post(`${BASE_URI}/login`, userData, { withCredentials: true })
            .then((res) => {
                
                if(res.data.status){
                setLoading(false)
                console.log(res)
                toast.success('SuccessFully Login')


                    navigate("/")



                }

                else{
                    setLoading(false)
                    toast.error('Invalid Credential !')
                }

            })
            .catch((err) => { 
                console.log(err)
                setLoading(false)
                toast.error('Api Not Hittt Credential !')
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

                                <Box sx={{ my: 2 }}>
                                    <TextField m={2} fullWidth id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </Box>

                                <Box sx={{ my: 2 }}>
                                    <TextField m={2} fullWidth id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                </Box>


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