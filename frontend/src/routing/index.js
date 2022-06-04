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
import VendorLogin from '../screen/Vendor_Auth/Login/login';
import VendorSignup from '../screen/Vendor_Auth/Signup/signup';


  

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="Booking" element={<Booking  />} />

          {/* <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} /> */}

                <Route path="Payment" element={<Payment  />} />
                <Route path="Find-Hotel" element={<FindHotel  />} />
                <Route path="Room-Detail" element={<RoomDetail  />} />
                <Route path="*" element={ <NotFound />} />
          
                <Route path="Login" element={<Login />} />
                <Route path="Signup" element={<Signup />} />


                <Route path="VendorLogin" element={<VendorLogin />} />
                <Route path="VendorSignup" element={<VendorSignup />} />


           
            </Routes>
        <Footer />
     </BrowserRouter>
    </>
  )
}

export default Routing