import React from 'react'
import Process from '../Process/Process'
import ServiceHero from '../ServiceHero/ServiceHero'
import HomeOffer from '../../HomePage/HomeOffer/HomeOffer'
import Portfolios from '../../HomePage/Portfolio/Portfolios'
import UiDesign from '../UiDesign/UiDesign'
import Web from '../Web/Web'
import DigitalMarketing from '../DigitalMarketing/DigitalMarketing'


const Service = () => (
    <div className='bg-zinc-900 text-white'>
        <ServiceHero />
        <UiDesign />
        <Web />
        <DigitalMarketing />
        <Process />
    </div>
)

export default Service