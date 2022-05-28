import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


  // calling components 

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Login from '../screen/Login/login';
import Signup from '../screen/Signup/signup';
import NotFound from '../components/NotFound/notfound';
import Home from '../screen/Home/home';


  

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="Login" element={<Login />} />
                <Route path="Signup" element={<Signup />} />
              {/* <Route path="portfolio" element={<Portfolio  />} />
                <Route path="portfolio" element={<Portfolio  />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />  */}
                <Route path="*" element={ <NotFound />} />
            </Routes>
        <Footer />
     </BrowserRouter>
    </>
  )
}

export default Routing