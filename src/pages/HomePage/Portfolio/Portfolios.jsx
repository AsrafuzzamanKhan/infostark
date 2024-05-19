import React from 'react'
import img1 from '../../../assets/portfolio/one.png'
import img2 from '../../../assets/portfolio/two.png'
import img3 from '../../../assets/portfolio/three.png'
import img4 from '../../../assets/portfolio/four.png'
import img5 from '../../../assets/portfolio/five.png'
import img6 from '../../../assets/portfolio/six.png'
import img7 from '../../../assets/portfolio/seven.png'
import Portfolio from './Portfolio'
const Portfolios = () => {
    const portfolios = [
        {
            id: 1,
            img: img1,
            title: 'Web Development'
        },
        {
            id: 2,
            img: img2,
            title: 'UI/UX Design'
        },
        {
            id: 3,
            img: img3,
            title: 'SEO'
        },
        {
            id: 4,
            img: img4,
            title: 'Social Media Marketing'
        },
        {
            id: 5,
            img: img5,
            title: 'Web Development'
        },
        {
            id: 6,
            img: img6,
            title: 'UI/UX Design'
        },
        {
            id: 7,
            img: img7,
            title: 'SEO'
        },
        {
            id: 8,
            img: img1,
            title: 'Social Media Marketing'
        },
    ]
    return (
        <section className='bg-zinc-900 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>{
                portfolios.map(portfolio => <Portfolio key={portfolio.id} portfolio={portfolio}></Portfolio>)
            }
            </div>
        </section>
    )
}

export default Portfolios