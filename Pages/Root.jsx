import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
        <Nav></Nav>
           <div className='w-full min-h-screen'>
             <Outlet></Outlet>
           </div>
        <Footer></Footer>    
        </div>
    );
};

export default Root;