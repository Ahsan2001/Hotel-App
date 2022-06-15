import React from 'react'
import  {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";



// User Screens
import { Login, Signup, Home, Booking, Payment, FindHotel, RoomDetail, VendorLogin, VendorSignup } from '../screen/client/index';

// Sub Admin || Vendor Admin Screens
import { Dashboard, Create, Delete, Edit } from '../screen/sub-admin/index';

// Root Admin Screens
import { Panel, ListingVendor, DeleteVendor  } from '../screen/admin/index';




import NotFound from '../components/NotFound/notfound';
import TOKENtesting from '../screen/testtingToken';
import Layout from './Outlet';

  

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* User Screens  */}
              <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Booking" element={<Booking />} />
              <Route path="Payment" element={<Payment />} />
              <Route path="Find-Hotel" element={<FindHotel />} />
              <Route path="Room-Detail/:id" element={<RoomDetail />} />
              <Route path="Login" element={<Login />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="VendorLogin" element={<VendorLogin />} />
              <Route path="VendorSignup" element={<VendorSignup />} />
              <Route path="jwdTest" element={<TOKENtesting />} />

            {/* Vendor Admin Screens */}
              <Route path="admin/dashboard" element={<Dashboard />} />
              <Route path="admin/create" element={<Create />} />
              <Route path="admin/edit" element={<Edit />} />
              <Route path="admin/delete" element={<Delete />} />
            
            {/* Root Admin Screens */}
              <Route path="rootAdmin/Panel" element={<Panel />} />
              <Route path="rootAdmin/ListingVendor" element={<ListingVendor />} />
              <Route path="rootAdmin/DeleteVendor" element={<DeleteVendor />} />

          </Route> 








          <Route path="*" element={<NotFound />} />
        </Routes>








      </BrowserRouter>






    </>
  )
}

export default Routing