import React from 'react'
import Header from '../pages/SharedPage/Header/Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../pages/SharedPage/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';
const Root = () => {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root