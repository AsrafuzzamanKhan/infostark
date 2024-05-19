import React from 'react'
import Hero from '../HomePage/Hero/Hero'
import Agency from '../HomePage/Agency/Agency'
import PortfolioText from '../HomePage/PortfolioText/PortfolioText'
import Portfolios from '../HomePage/Portfolio/Portfolios'
import HomeOffer from '../HomePage/HomeOffer/HomeOffer'
import HomeTestimonial from '../HomePage/HomeTestimonial/HomeTestimonial'


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Agency />
            <PortfolioText />
            <Portfolios></Portfolios>
            <HomeOffer />
            {/* <HomeTestimonial /> */}
            {/* <HomeBlog />
            <HomeSponsor /> */}
        </div>
    )
}

export default Home