import React from 'react'
import  {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";



// Calling Screens
import { Login, Signup, Home, Booking, Payment, FindHotel, RoomDetail, VendorLogin, VendorSignup } from '../screen/index';



import PageLayout from './outlet';
import NotFound from '../components/NotFound/notfound';
import TOKENtesting from '../screen/testtingToken';


  

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="Booking" element={<Booking />} />
            <Route path="Payment" element={<Payment />} />
            <Route path="Find-Hotel" element={<FindHotel />} />
            <Route path="Room-Detail/:id" element={<RoomDetail />} />
            <Route path="jwdTest" element={<TOKENtesting />} />


            {/* <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} /> */}



            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="VendorLogin" element={<VendorLogin />} />
            <Route path="VendorSignup" element={<VendorSignup />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>






    </>
  )
}

export default Routing