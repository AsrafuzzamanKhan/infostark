import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Agency from '../../Components/Agency/Agency'
import PortfolioText from '../../Components/PortfolioText/PortfolioText'
import HomeOffer from '../../Components/HomeOffer/HomeOffer'
import HomeTestimonial from '../../Components/HomeTestimonial/HomeTestimonial'
import HomeBlog from '../../Components/HomeBlog/HomeBlog'
import HomeSponsor from '../../Components/HomeSponsor/HomeSponsor'

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Agency />
            <PortfolioText />
            <HomeOffer />
            <HomeTestimonial />
            <HomeBlog />
            <HomeSponsor />
        </div>
    )
}

export default Home