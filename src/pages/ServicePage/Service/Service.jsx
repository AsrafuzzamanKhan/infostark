import React from 'react'
import Process from '../Process/Process'
import ServiceHero from '../ServiceHero/ServiceHero'
import HomeOffer from '../../HomePage/HomeOffer/HomeOffer'
import Portfolios from '../../HomePage/Portfolio/Portfolios'

const Service = () => {
    return (
        <div className='bg-zinc-900 text-white'>
            <ServiceHero />
            <HomeOffer />
            <Portfolios />
            <Process />
        </div>
    )
}

export default Service