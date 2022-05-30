import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


// Calling Components 

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';


// Calling Screens
import Login from '../screen/User_Auth/Login/login';
import Signup from '../screen/User_Auth/Signup/signup';
import NotFound from '../components/NotFound/notfound';
import Home from '../screen/Home/home';
import Booking from '../screen/booking/booking';
import Payment from '../screen/Payment/payment';
import FindHotel from '../screen/Find_Hotel/findHotel';
import RoomDetail from '../screen/Room_Detail/roomDetail';


  

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="Login" element={<Login />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="Booking" element={<Booking  />} />
                <Route path="Payment" element={<Payment  />} />
                <Route path="Find-Hotel" element={<FindHotel  />} />
                <Route path="Room-Detail" element={<RoomDetail  />} />
                <Route path="*" element={ <NotFound />} />
            </Routes>
        <Footer />
     </BrowserRouter>
    </>
  )
}

export default Routing