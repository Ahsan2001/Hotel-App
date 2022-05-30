import axios from "axios";
import React, { useState } from "react";
import styles from './booking.module.css'
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/loader";
import BASE_URI from "../../core";
import { toast } from "react-toastify";


const Booking = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [cnic, setCnic] = useState('');
    const [address, setAddress] = useState('');
    const [noOfPerson, setNoOfPerson] = useState('');

    const bookingData = {
        name, phone, email, cnic, address, noOfPerson
    }

    const bookingNow = (e) => {
        setLoading(true)
        e.preventDefault();
        axios
            .post(`${BASE_URI}/booking`, bookingData)
            .then(
                (res) => {
                    setLoading(false)
                    console.log(res)
                    toast.success('bookingData Submmited')
                    navigate("/Home")
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                    toast.error('Error Submission')
                    setLoading(false)
                }
            );
    }

    return (
        <React.Fragment>
            <section className={ `${styles.auth_account} my-5` }>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-10 m-auto">
                            <h1 className={ `${styles.Booking_heading} text-center mt-2  `}>Booking Room</h1>
                            <form className={`row ${styles.bookingFormInner}`}>

                                <div className="col-md-6">
                                    <label htmlFor="name">
                                         Full Name <span className={styles.redBtn}>*</span>
                                    </label>
                                    <input id="name" className="form-control" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="email">
                                         Email Address <span className={styles.redBtn}>*</span>
                                    </label>
                                    <input id="email" className="form-control" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>


                                <div className="col-md-6">
                                    <label htmlFor="cnic">
                                         CNIC Number <span className={styles.redBtn}>*</span>
                                    </label>
                                    <input id="cnic" className="form-control" type="Number" value={cnic} onChange={(e) => { setCnic(e.target.value) }} />
                                </div>


                                <div className="col-md-6">
                                    <label htmlFor="phone">
                                         Phone Number <span className={styles.redBtn}>*</span>
                                    </label>
                                    <input id="phone" className="form-control" type="number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                                </div>


                                <div className="col-md-10">
                                    <label htmlFor="address">
                                         Address <span className={styles.redBtn}>*</span>
                                    </label>
                                    <input id="address" className="form-control" type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                                </div>



                                <div className="col-md-2 ps-0">
                                    <label htmlFor="totalPerson">
                                        Total Person <span className={styles.redBtn}>*</span>
                                    </label>
                                    <input id="totalPerson" className="form-control" type="number" value={noOfPerson} onChange={(e) => { setNoOfPerson(e.target.value) }} />
                                </div>



                                {loading ? <Loader /> : <button className={`btn btn-primary ${styles.booking_btn}`} onClick={bookingNow}>Book Now</button>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Booking;