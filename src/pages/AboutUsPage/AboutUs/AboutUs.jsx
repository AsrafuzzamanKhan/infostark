import React from 'react'
import AboutHero from '../AboutHero/AboutHero'
import { AboutDetails } from '../AboutDetails/AboutDetails'
import AboutMarquee from '../AboutMarquee/AboutMarquee'

const AboutUs = () => {
    return (
        <section className='min-h-screen bg-zinc-900 text-white'>
            <AboutHero />
            <AboutDetails />
            <AboutMarquee />
        </section>
    )
}

export default AboutUs