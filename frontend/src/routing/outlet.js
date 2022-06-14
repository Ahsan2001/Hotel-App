import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';

const Layout = () => (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>
);

export default Layout